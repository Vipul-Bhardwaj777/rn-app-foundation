import type { WalletData } from '../types/walletTypes';

export const fetchWallet = async (): Promise<WalletData> => {
  return { balance: 0, transactions: [] };
};
