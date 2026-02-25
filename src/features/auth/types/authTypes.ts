export interface UserData {
  access_token?: string;
  id?: string;
  email?: string;
  [key: string]: unknown;
}

export interface AuthState {
  userData: UserData | null;
}
