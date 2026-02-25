import type { SettingsState } from '../types/settingsTypes';

const initialState: SettingsState = {
  lastOpenedAt: null,
};

let state: SettingsState = initialState;

export const getSettingsState = (): SettingsState => state;

export const setSettingsLastOpenedAt = (date: number | null): void => {
  state = { ...state, lastOpenedAt: date };
};

export const resetSettingsState = (): void => {
  state = initialState;
};
