import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers, requireAuthorization, saveUserData } from './action';
import {cities} from '../const';
import {Offers} from '../types/offers';
import {AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';

type InitialState = {
  city: string;
  offers: Offers;
  isDataLoaded:boolean;
  authorizationStatus: AuthorizationStatus;
  user: UserData;
}

const initialState: InitialState = {
  city: cities[0],
  offers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(saveUserData, (state, action) => {
      state.user = action.payload;
    });
});


export {reducer};
