import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerSlice } from './offer-slice/offer-slice';
import { userSlice } from './user-slice/user-slice';
import {hotelSlice} from './hotels-slice/hotels-slice';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Hotels]: hotelSlice.reducer,
});
