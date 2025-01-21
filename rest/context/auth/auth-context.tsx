// import { SolarAfriqCookie } from '@/config';
import { useState, createContext, useEffect, ReactNode, useMemo } from 'react';
import nookies from 'nookies';
import Cookies from 'js-cookie';
import { IAuthContextProps, User } from '../type';

const SolarAfriqCookie = process.env.NEXT_PUBLIC_SOLAR_AFRIQ_COOKIE_NAME as string;

export const AuthContext = createContext<IAuthContextProps>({
  token: '',
  user: null,
  pageIsLoaded: false,
  handleLogOut: () => {},
  handleSetToken: () => {},
  handleSetUser: () => {},
});

interface IAuthProviderProps {
  children: ReactNode;
}

AuthContext.displayName = 'Auth';

export function AuthContextProvider({ children }: IAuthProviderProps) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [pageIsLoaded, setPageIsLoaded] = useState(false);
  // let user: User;
  useEffect(() => {
    // Execute on initial load
    checkCookieForAuthToken();
  }, []);

  const value = useMemo(() => {
    const handleSetToken = (token: string) => {
      setToken(token);

      // Set cookie
      Cookies.set(SolarAfriqCookie, token, {
        path: '/',
        expires: 1 / 6, // 4 hours
        secure: true,
      });
    };

    // const handleSetUser = (value: User) => {
    const handleSetUser = (value: any) => {
      setUser(value);
      // Set user in local storage
      localStorage.setItem(SolarAfriqCookie, JSON.stringify(value));
    };

    const handleLogOut = () => {
      // Reset token & user
      setToken('');
      setUser(null);

      // Remove cookie & local storage data
      localStorage.removeItem(SolarAfriqCookie);
      Cookies.remove(SolarAfriqCookie);
    };

    return {
      token,
      user,
      pageIsLoaded,
      handleSetToken,
      handleLogOut,
      handleSetUser,
    };
  }, [token, user, pageIsLoaded]);

  const checkCookieForAuthToken = () => {
    const cookie = nookies.get(null, SolarAfriqCookie);

    // Check if cookie exists
    if (cookie[SolarAfriqCookie] !== undefined) {
      const tokenInCookie = cookie[SolarAfriqCookie];

      // Check if token exists in cookie
      if (tokenInCookie) {
        // Get user from local storage
        const storageUser = localStorage.getItem(SolarAfriqCookie);
        let parseStorageUser = null;

        if (storageUser) {
          // Parse user from local storage
          parseStorageUser = JSON.parse(storageUser);
        }

        // update states
        setToken(tokenInCookie);
        setUser(parseStorageUser);
        setPageIsLoaded(true);
      } else {
        setPageIsLoaded(true);
        localStorage.removeItem(SolarAfriqCookie);
      }
    } else {
      setPageIsLoaded(true);
      localStorage.removeItem(SolarAfriqCookie);
    }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
