import React from 'react';
import { FlatList } from 'react-native';

import type { HostItem } from '../types/hostsTypes';
import { HostCard } from './HostCard';

export interface HostListProps {
  data: HostItem[];
}

export const HostList: React.FC<HostListProps> = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <HostCard name={item.name} rating={item.rating} />
    )}
  />
);
