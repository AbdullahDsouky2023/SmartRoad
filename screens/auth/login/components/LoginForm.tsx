import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import CustomInput from './CustomInput';
import Button from './Button';
import { router } from 'expo-router';
import userProfileStore from '~/store/user';
import { supabase } from '~/lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
    hasAccount: boolean;
};

const LoginForm = ({ hasAccount }: Props) => {
    const { email, password, setUserField , setUser } = userProfileStore();
    const dataCompleted = email && password;

    const handleValidation = () => {
        if (!email && !password) {
            Alert.alert('Please Enter your email');
            return false;
        } else if (email && !password) {
            Alert.alert('Please Enter your password');
            return false;
        } else if (!email && password) {
            Alert.alert('Please Enter your email');
            return false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            Alert.alert('Please enter a valid email address');
            return false;
        } else if (password?.length < 8) {
            Alert.alert('Password should be length of 8 or more');
            return false;
        }
        return true;
    };

    const Register = async () => {
        try {
            if (!handleValidation()) return;

            // First create the auth user
            const { data: authData, error: authError } = await supabase.auth.signUp({
                email,
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
                            email: email,
                        }
                    ]);

                if (error) throw error;

                Alert.alert('Registration successful! Please check your email for verification.');
            }
        } catch (error: any) {
            console.error('Error registering:', error.message);
            Alert.alert('Registration failed', error.message);
        }
    };

    const Login = async () => {
        try {
            if (!handleValidation()) return;

            // Authenticate user and get session
            const { data: userData, error: userError } = await supabase
            .from('users')
            .select('*')
            .eq('email', email)
            .single();
            console.log("🚀 ~ Login ~ userData:", userData)

            if (userData) {
                if (userError) throw userError;
                setUser(userData);
                

                // Navigate to the next screen
                router.navigate('/(tabs)/');
                Alert.alert('Login Successful');
            }
                    console.log("🚀 ~ Login ~ userData:", userData)
        } catch (error: any) {
            console.error('Error logging in:', error.message);
            Alert.alert('Login failed', error.message);
        }
    };

    return (
        <View className='bg-red-400' style={styles?.container}>
            <CustomInput
                title='Email'
                placeholder='Email'
                text={email}
                setText={(value) => setUserField('email', value)}
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