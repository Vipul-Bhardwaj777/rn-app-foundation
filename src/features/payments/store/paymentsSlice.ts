import type { PaymentsState } from '../types/paymentsTypes';

const initialState: PaymentsState = {
  lastUsedMethodId: null,
};

let state: PaymentsState = initialState;

export const getPaymentsState = (): PaymentsState => state;

export const setLastUsedMethodId = (id: string | null): void => {
  state = { ...state, lastUsedMethodId: id };
};

export const resetPaymentsState = (): void => {
  state = initialState;
};
