import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface ProfileHeaderProps {
  name?: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
});
