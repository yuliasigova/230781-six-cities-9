import {createAction} from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { AuthorizationStatus} from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction('changeCity', (city:string) => ({
  payload: city,
}));

export const loadOffers = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const saveUserData = createAction<UserData>('user/saveUserData');
