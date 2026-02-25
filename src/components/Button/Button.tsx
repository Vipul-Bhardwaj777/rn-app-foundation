import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export interface ButtonProps {
  label: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#111827',
  },
  label: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '500',
  },
});
