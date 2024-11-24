import { SocialMediaAccount } from '@/components/customInputs/addSocialMedia';

export type User = {
  _id: string;
  DateOfBirth: string;
  Gender: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Token: string;
  FirstName: string;
  LastName: string;
  NIN: string;
  Email: string;
  Role: number[];
  BankAccount: {
    BankName: string;
    BankNumber: string;
  };
  SocialMediaAccounts: SocialMediaAccount[];
  ProfilePicLink: string;
  Verified: boolean;
};

export interface IAuthContextProps {
  token: string;
  user: User | null;
  pageIsLoaded: boolean;
  handleLogOut(): void;
  handleSetToken(token: string): void;
  handleSetUser(user: USER): void;
}
