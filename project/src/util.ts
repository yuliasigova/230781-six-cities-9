import { AuthorizationStatus } from './const';
import {Offers} from './types/offers';
import { SortType } from './const';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const getRating = (rating: number):number => rating * 20;

export const sortOffers = (offers: Offers, sortType:string) => {
  //const filterOffers = offers.filter((offer) => offer.city.name === city);
  switch(sortType) {
    case SortType.PriceLow:
      return offers.sort((a, b) => (a.price > b.price ? 1 : -1));
    case SortType.PriceHigh:
      return offers.sort((a, b) => (a.price > b.price ? -1 : 1));
    case SortType.Rated:
      return offers.sort((a, b) => (a.rating > b.rating ? -1 : 1));
    default:
      return offers;
  }
};
