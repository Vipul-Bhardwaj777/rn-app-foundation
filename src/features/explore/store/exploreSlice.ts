import type { ExploreState } from '../types/exploreTypes';

const initialState: ExploreState = {
  lastQuery: '',
};

let state: ExploreState = initialState;

export const getExploreState = (): ExploreState => state;

export const setExploreLastQuery = (query: string): void => {
  state = { ...state, lastQuery: query };
};

export const resetExploreState = (): void => {
  state = initialState;
};
