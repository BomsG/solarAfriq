export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  address: string;
  profile: string;
  idDoc: string;
  roles: string[];
  isVerified: boolean;
  technicianStatus: string;
};

export interface IAuthContextProps {
  token: string;
  user: User | null;
  pageIsLoaded: boolean;
  handleLogOut(): void;
  handleSetToken(token: string): void;
  handleSetUser(user: USER): void;
}
