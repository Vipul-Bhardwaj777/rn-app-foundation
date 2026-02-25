export interface HostsState {
  lastLoadedAt: number | null;
}

export interface HostItem {
  id: string;
  name?: string;
  rating?: string | number;
}
