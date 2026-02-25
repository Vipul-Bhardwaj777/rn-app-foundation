import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface HomeCardProps {
  title?: string;
  subtitle?: string;
}

export const HomeCard: React.FC<HomeCardProps> = ({ title, subtitle }) => (
  <View style={styles.card}>
    {!!title && <Text style={styles.title}>{title}</Text>}
    {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 13,
    marginTop: 4,
  },
});
