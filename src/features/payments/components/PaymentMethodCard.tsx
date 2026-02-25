import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface PaymentMethodCardProps {
  label: string;
}

export const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
  label,
}) => (
  <View style={styles.card}>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
});
