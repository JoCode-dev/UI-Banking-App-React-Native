import * as React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {constants, FONTS, COLORS} from '../../style';
import Transaction from '../atoms/Transaction';

const Transactions = ({cardNumber}) => {
  const transactionsFiltered = constants?.transactions.filter(
    item => item.cardNumber === cardNumber,
  );
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          width: '100%',
        }}>
        <Text
          style={{
            ...FONTS.h1,
            lineHeight: 30,
          }}>
          Transactions
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 16,
              width: 60,
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactionsFiltered}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Transaction
            title={item.title}
            amount={item.amount}
            image={item.icon}
            category={item.category}
            type={item.type}
          />
        )}
      />
    </View>
  );
};

export default Transactions;
