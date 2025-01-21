'use client';

import { FC, ReactNode } from 'react';
import { AuthContextProvider } from './auth/auth-context';

interface IAppProviderProps {
  children: ReactNode;
}

export const AppContextProvider: FC<IAppProviderProps> = ({ children }) => (
  <AuthContextProvider>{children}</AuthContextProvider>
);
