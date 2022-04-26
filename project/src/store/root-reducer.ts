import {combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerSlice } from './offer-slice/offer-slice';
import { userSlice } from './user-slice/user-slice';
import {hotelSlice} from './hotels-slice/hotels-slice';

export const rootReducer = combineReducers({
  [NameSpace.offer]: offerSlice.reducer,
  [NameSpace.user]: userSlice.reducer,
  [NameSpace.hotels]: hotelSlice.reducer,
});
