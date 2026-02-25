export interface LoginCredentials {
  email: string;
  password?: string;
}

export interface RegisterPayload {
  email: string;
  password?: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface AuthUserResponse {
  user: { id: string; email: string };
}

export const loginApi = async (
  credentials: LoginCredentials
): Promise<AuthUserResponse> => {
  return { user: { id: '1', email: credentials.email } };
};

export const registerApi = async (
  payload: RegisterPayload
): Promise<AuthUserResponse> => {
  return { user: { id: '1', email: payload.email } };
};

export const forgotPasswordApi = async (
  payload: ForgotPasswordPayload
): Promise<{ success: boolean }> => {
  return { success: true };
};
