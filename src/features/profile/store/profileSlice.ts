import type { ProfileState } from '../types/profileTypes';

const initialState: ProfileState = {
  lastUpdatedAt: null,
};

let state: ProfileState = initialState;

export const getProfileState = (): ProfileState => state;

export const setProfileLastUpdatedAt = (date: number | null): void => {
  state = { ...state, lastUpdatedAt: date };
};

export const resetProfileState = (): void => {
  state = initialState;
};
