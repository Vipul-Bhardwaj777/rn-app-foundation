export interface WalletState {
  lastSyncedAt: number | null;
}

export interface WalletData {
  balance: number;
  transactions: TransactionItem[];
}

export interface TransactionItem {
  id?: string;
  title: string;
  amount: string | number;
}
