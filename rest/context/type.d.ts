import { SocialMediaAccount } from '@/components/customInputs/addSocialMedia';

export type User = {
  _id: string;
  email: string;
  roles: string[];
  isVerified: boolean;
};

export interface IAuthContextProps {
  token: string;
  user: User | null;
  pageIsLoaded: boolean;
  handleLogOut(): void;
  handleSetToken(token: string): void;
  handleSetUser(user: USER): void;
}
