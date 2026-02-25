import type { HomeState } from '../types/homeTypes';

const initialState: HomeState = {
  lastVisitedAt: null,
};

let state: HomeState = initialState;

export const getHomeState = (): HomeState => state;

export const setHomeLastVisitedAt = (date: number | null): void => {
  state = { ...state, lastVisitedAt: date };
};

export const resetHomeState = (): void => {
  state = initialState;
};
