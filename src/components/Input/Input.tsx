import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export const Input: React.FC<TextInputProps> = (props) => (
  <TextInput style={styles.input} {...props} />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderColor: '#e5e7eb',
  },
});
