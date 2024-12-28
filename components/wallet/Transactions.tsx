import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import BottomSheet from 'react-native-simple-bottom-sheet';
import { Transaction, useTransactions } from '~/api/transactions';

type Props = {}

const Transactions = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text
                style={{
                    fontSize: 25,
                    padding: 10,
                    fontFamily: 'BoldBeVietnam',
                    color: 'blue',
                    fontWeight: 800
                }}
            >
                My Transactions
            </Text>

<TransactionsList/>






        </View>
    )
}

export default Transactions

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    Header: {

    },
});

interface Item  {
    id: number,
    date:string,
    amount: string,
    type: string,
    color: string
}
const TranctionItem = ({item}:{
    item:Transaction
}) => {
    return (
        <View style={{
            padding: 10,
            backgroundColor: 'lightgray',
            margin: 10,
            borderRadius: 15,
            
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',

        }}>
            <Feather name="arrow-down-right" size={24} color="white" style={
                {
                    backgroundColor: 'blue',
                    margin: 5,
                    width: 50,
                    padding: 10,
                    borderRadius: 15,
                    overflow: 'hidden'
                }
            } />

            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width:'80%'

            }}>
                <View>
                    <Text
                        style={{
                            fontSize: 20,
                            paddingHorizontal: 10,
                            fontFamily: 'BoldBeVietnam',
                            color: 'blue',
                            fontWeight: 600
                        }}
                    >
                       {item?.transaction_type}
                    </Text>
                    <Text
                        style={{
                            fontSize: 15,
                            paddingHorizontal: 10,
                            fontFamily: 'BoldBeVietnam',
                            color: 'gray',
                            fontWeight: 600
                        }}
                    >
                        {item?.transaction_date}
                    </Text>
                </View>
                <Text
                    style={{
                        fontSize: 20,
                        padding: 10,
                        fontFamily: 'BoldBeVietnam',
                        color: 'green',
                        fontWeight: 600
                    }}
                >
                    {item?.amount} EGP
                </Text>
              
            </View>
        </View>
    )
    
}


const TransactionsList = ()=>{
    const {transactions,isLoading,refetch} = useTransactions()
    console.log('transaction2222∂s',transactions)
    return(
        <FlatList
        data={transactions}
        ListEmptyComponent={<EmptyTransactions/>}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch}/>}
        contentContainerStyle={{
            paddingBottom:500
        }}
        renderItem={({item})=>{
            return(
                <TranctionItem item={item}/>
            )
        }}
        />
    )
}


const EmptyTransactions =()=>{

return <Text style={{
                    fontSize: 20,
                    padding: 10,
                    fontFamily: 'BoldBeVietnam',
                    color: 'gray',
                    textAlign:'center',
                    fontWeight: 800
                }}>

There is no Tranctions Yet!</Text>
}