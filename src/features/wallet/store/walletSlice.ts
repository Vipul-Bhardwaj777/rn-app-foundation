import type { WalletState } from '../types/walletTypes';

const initialState: WalletState = {
  lastSyncedAt: null,
};

let state: WalletState = initialState;

export const getWalletState = (): WalletState => state;

export const setWalletLastSyncedAt = (date: number | null): void => {
  state = { ...state, lastSyncedAt: date };
};

export const resetWalletState = (): void => {
  state = initialState;
};
