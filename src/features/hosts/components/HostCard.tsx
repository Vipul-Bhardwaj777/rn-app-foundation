import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface HostCardProps {
  name?: string;
  rating?: string | number;
}

export const HostCard: React.FC<HostCardProps> = ({ name, rating }) => (
  <View style={styles.card}>
    {!!name && <Text style={styles.name}>{name}</Text>}
    {!!rating && <Text style={styles.rating}>Rating: {rating}</Text>}
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#ffffff',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  rating: {
    fontSize: 13,
    marginTop: 4,
  },
});
