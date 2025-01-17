import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  Animated, 
  TouchableOpacity,
  RefreshControl 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { format } from 'date-fns';
import { supabase } from '~/lib/supabase';
import AppText from '~/components/AppText';
import { getLocale } from '~/localization/localize';

// Sample API call function - replace with your actual API endpoint
const fetchTransactions = async () => {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .select('*');
      if (error) {
      throw error;
    }
    console.log("🚀 ~ fetchTransactions ~ data:", data?.length)
    return data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const fadeAnim = new Animated.Value(0);
  const translateY = new Animated.Value(50);

  useEffect(() => {
    loadTransactions();
    animateList();
  }, []);

  const animateList = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const loadTransactions = async () => {
    setLoading(true);
    const data = await fetchTransactions();
    if(data){

        setTransactions(data);
    }
    setLoading(false);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTransactions();
    setRefreshing(false);
  };

  const getTransactionIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'deposit':
        return 'arrow-downward';
      case 'withdrawal':
        return 'arrow-upward';
      case 'transfer':
        return 'swap-horiz';
      default:
        return 'payment';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return '#4CAF50';
      case 'pending':
        return '#FFC107';
      case 'failed':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  };

  const renderTransaction = ({ item, index }) => {
    console.log("🚀 ~ renderTransaction ~ item:", item)
    const itemFadeAnim = new Animated.Value(0);
    const itemTranslateY = new Animated.Value(50);

    Animated.parallel([
      Animated.timing(itemFadeAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(itemTranslateY, {
        toValue: 0,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start();

    return (
      <Animated.View
        style={[
          styles.transactionItem,
          {
            opacity: itemFadeAnim,
            transform: [{ translateY: itemTranslateY }],
          },
        ]}
      >
        <View style={styles.iconContainer}>
          <MaterialIcons 
            name={getTransactionIcon(item.transaction_type)} 
            size={24} 
            color="#2196F3" 
          />
        </View>
        <View style={styles.transactionDetails}>
          <View style={styles.topRow}>
            <AppText style={styles.transactionType}
         textKey=     {item.transaction_type.charAt(0).toUpperCase() + 
          item.transaction_type.slice(1)}
            />
            <Text style={styles.amount}>
        {parseFloat(item.amount).toFixed(2)}   {getLocale() === 'ar' ? 'ج.م' : '$'}
            </Text>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.dateTime}>
              {format(new Date(item.transaction_datetime), 'MMM dd, yyyy HH:mm')}
            </Text>
            <View style={[
              styles.statusBadge,
              { backgroundColor: getStatusColor(item.status) }
            ]}>
              <AppText style={styles.statusText} textKey={item.status}/>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <AppText textKey='Loading transactions' FValue={14} className='font-main text-blue-600 font-bold my-4'/>
      </View>
    );
  }

  return (
    <Animated.View  >
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.transaction_id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#2196F3']}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <AppText style={styles.emptyText} textKey='No transactions found'/>
          </View>
        }
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  listContainer: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
  },
  amount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#212121',
  },
  dateTime: {
    fontSize: 12,
    color: '#757575',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: 'white',
    fontWeight: '500',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#757575',
  },
});

export default TransactionList;