import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../auth/login/components/CustomInput'
import Button from '../auth/login/components/Button'
import { FONT_FAMILY_BOLD } from '~/constant/styles'
import { router } from 'expo-router'
import BottomSheet from 'react-native-simple-bottom-sheet';
import { useWallet } from '~/api/wallet'
import userProfileStore from '~/store/user'
import { supabase } from '~/lib/supabase'
import AppText from '~/components/AppText'
import {toast} from 'sonner-native'
import i18n from '../../localization/localize'
type Props = {}

const ChargeWalletScreen = (props: Props) => {
    const [text, setText] = useState('0')
    const { user_id } = userProfileStore()
    const { wallet, refetch, isLoading } = useWallet(user_id)
    const balance = wallet?.current_balance
    console.log("🚀 ~ ChargeWalletScreen ~ balance:", balance)

    const handleChargeWallet = async () => {
        const newBalance = Number(balance) + Number(text)
        try {
            const { error } = await supabase
                .from('wallets')
                .update({ current_balance: newBalance.toString() })
                .eq('user_id', user_id)

            if (error) {
                throw error
            }
            
            // Create a new transaction in the 'transactions' table
            // const { error: transactionError } = await supabase
            //     .from('transactions')
            //     .insert({
            //         amount: text,
            //         transaction_type: 'credit',
            //         wallet_id: wallet.id
            //     })

            // if (transactionError) {
            //     throw transactionError
            // }
            
            toast.success(i18n.t('Wallet charged successfully!'))
            refetch()
            router.navigate('/(tabs)')
        } catch (error) {
            console.log("🚀 ~ handleChargeWal ~ error:", error)
            toast.error('Error charging wallet:', error.message)
        }
    }

    return (
        <View
            style={{
                backgroundColor: "white",
                flex: 1,
                display: 'flex',
                paddingHorizontal: 20,
                justifyContent: 'center'
            }}
        >
            <CustomInput
                placeholder='Charge Wallet'
                title='Enter Amount'
                text={text}
                setText={setText}
                keyboardType='decimal-pad'
            />

            <Button
                title='Charge'
                onPress={handleChargeWallet}
                disabled={(Number(text) > 10)}
            />
            {
                Number(text) <= 10 &&
                <AppText
                    style={{
                        fontFamily: FONT_FAMILY_BOLD,
                        color: 'red',
                        textAlign: 'center'
                    }}
                 textKey='Please Charge with more than 10$'
                />
            }
        </View>
    )
}

export default ChargeWalletScreen