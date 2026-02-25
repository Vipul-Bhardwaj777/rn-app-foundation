import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const ExploreFilterBar: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.label}>Filters</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
});
