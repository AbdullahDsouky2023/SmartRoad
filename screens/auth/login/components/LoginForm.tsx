import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomInput from './CustomInput';
import Button from './Button';
import { router } from 'expo-router';
import userProfileStore from '~/store/user';
import { supabase } from '~/lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '~/localization/localize';
import {toast} from 'sonner-native'
type Props = {
    hasAccount: boolean;
};

const LoginForm = ({ hasAccount }: Props) => {
    const { national_id, password, setUserField , setUser } = userProfileStore();
    const dataCompleted = national_id && password;

    const handleValidation = () => {
        if (!national_id && !password) {
           toast.error(i18n.t('Please Enter your national ID'));
            return false;
        } else if (national_id && !password) {
           toast.error((i18n.t('Please Enter your password')));
            return false;
        } else if (!national_id && password) {
           toast.error((i18n.t('Please Enter your national ID')));
            return false;
        } else if (password?.length < 8) {
           toast.error((i18n.t('Password should be length of 8 or more')));
            return false;
        }
        return true;
    };

    const Register = async () => {
        try {
            if (!handleValidation()) return;

            // First create the auth user
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email: `${national_id}@example.com`, // Assuming a placeholder email for national ID
                password,
            });

            if (authError) throw authError;

            if (authData.user) {
                // Then insert the user data into your users table
                const { data, error } = await supabase
                    .from('users')
                    .insert([
                        {
                            user_id: authData.user.id,
                            national_id: national_id,
                        }
                    ]);

                if (error) throw error;

                toast.success('Registration successful! Please check your email for verification');
            }
        } catch (error: any) {
            console.error('Error registering:', error.message);
            toast.error('Registration failed', error.message);
        }
    };

    const Login = async () => {
        try {
            if (!handleValidation()) return;

            // Authenticate user and get session
            const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('national_id', national_id)
            .single();
            console.log("🚀 ~ Login ~ userData:", userData)

            if (userData) {
                if (userError) {
                    console.log("🚀 ~ Login ~ userError:", userError)
                    
                }
                setUser(userData);
                

                // Navigate to the next screen
                router.navigate('/(tabs)/');
              toast.success(i18n.t('Login Successful'));
            }else {
                console.log("🚀 ~ Login ~ userData:", userData)
                toast.error(i18n.t('Invalid Credentials'));
            }
        } catch (error: any) {
            console.error('Error logging in:', error.message);
          toast.error(i18n.t('Login failed'));
        }
    };

    return (
        <View className='bg-red-400' style={styles?.container}>
            <CustomInput
                title='National ID'
                placeholder='National ID'
                text={national_id}
                setText={(value) => setUserField('national_id', value)}
            />
            <CustomInput
                title='Password'
                password={true}
                placeholder='Password'
                text={password}
                setText={(value) => setUserField('password', value)}
            />
            <Button
                title={hasAccount ? 'Login' : 'Register'}
                disabled={dataCompleted}
                onPress={hasAccount ? Login : Register}
            />
        </View>
    );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        fontSize: 20,
        borderColor: 'gray'
    },
    label: {
        paddingHorizontal: 15,
        marginVertical: 20,
        fontSize: 20
    },
});