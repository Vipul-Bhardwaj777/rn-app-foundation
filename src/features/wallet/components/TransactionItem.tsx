import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface TransactionItemProps {
  title: string;
  amount: string | number;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  amount,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.amount}>{amount}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  title: {
    fontSize: 14,
  },
  amount: {
    fontSize: 14,
    fontWeight: '500',
  },
});
