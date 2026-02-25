import React from 'react';
import { Text } from 'react-native';

export interface IconProps {
  name: string;
}

/** Placeholder icon component – replace with proper icon library later. */
export const Icon: React.FC<IconProps> = ({ name }) => <Text>{name}</Text>;
