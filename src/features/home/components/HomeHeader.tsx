import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface HomeHeaderProps {
  title?: string;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  title = 'Home',
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});
