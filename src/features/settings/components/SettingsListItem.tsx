import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface SettingsListItemProps {
  label: string;
}

export const SettingsListItem: React.FC<SettingsListItemProps> = ({
  label,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  label: {
    fontSize: 14,
  },
});
