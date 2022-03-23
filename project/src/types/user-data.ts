export type UserData = {
  avatarUrl: string;
  id: number;
  email: string;
  isPro: boolean;
  name: string;
} | null;

export type User = UserData & {
  token: string;
}
