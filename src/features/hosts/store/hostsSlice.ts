import type { HostsState } from '../types/hostsTypes';

const initialState: HostsState = {
  lastLoadedAt: null,
};

let state: HostsState = initialState;

export const getHostsState = (): HostsState => state;

export const setHostsLastLoadedAt = (date: number | null): void => {
  state = { ...state, lastLoadedAt: date };
};

export const resetHostsState = (): void => {
  state = initialState;
};
