import { AuthorizationStatus } from './const';

export const createPremiumMark = (isPremium:boolean):JSX.Element | null => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null;

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const getRating = (rating: number):number => rating * 20;
