import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers} from './action';
import {cities} from '../const';
import {Offers} from '../types/offers';

type InitialState = {
  city: string;
  offers: Offers;
  isDataLoaded:boolean;
}

const initialState: InitialState = {
  city: cities[0],
  offers: [],
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    });
});


export {reducer};
