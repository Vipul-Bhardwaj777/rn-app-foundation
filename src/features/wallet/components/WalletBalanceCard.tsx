import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface WalletBalanceCardProps {
  balance: number | string;
}

export const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({
  balance,
}) => (
  <View style={styles.card}>
    <Text style={styles.label}>Current Balance</Text>
    <Text style={styles.balance}>{balance}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 13,
    marginBottom: 4,
  },
  balance: {
    fontSize: 20,
    fontWeight: '600',
  },
});
