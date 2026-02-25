import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export interface ExploreResultItemProps {
  title?: string;
  subtitle?: string;
}

export const ExploreResultItem: React.FC<ExploreResultItemProps> = ({
  title,
  subtitle,
}) => (
  <View style={styles.container}>
    {!!title && <Text style={styles.title}>{title}</Text>}
    {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
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
