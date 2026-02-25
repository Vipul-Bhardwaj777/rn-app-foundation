import type { HomeFeedItem } from '../types/homeTypes';

export const fetchHomeFeed = async (): Promise<HomeFeedItem[]> => {
  return [{ id: '1', title: 'Welcome to FeatureWise' }];
};
