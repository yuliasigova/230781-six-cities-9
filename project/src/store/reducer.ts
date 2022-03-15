import {createReducer} from '@reduxjs/toolkit';
import {offers} from '../mocks/offers';
import {changeCity, loadOffers} from './action';
import {cities} from '../const';

const initialState = {
  city: cities[0],
  offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers;
    });
});


export {reducer};
