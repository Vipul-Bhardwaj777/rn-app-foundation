import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const HostsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hosts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
