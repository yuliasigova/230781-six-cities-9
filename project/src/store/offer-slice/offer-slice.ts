import {createSlice} from '@reduxjs/toolkit';
import {Offers, Offer} from '../../types/offers';
import {Reviews} from '../../types/reviews';
import {NameSpace} from '../../const';

type InitialState = {
  offer: Offer ;
  rewiews: Reviews;
  nearbyHotels: Offers;
}

const initialState: InitialState = {
  offer: {} as Offer,
  rewiews: [],
  nearbyHotels: [],
};

export const offerSlice = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    loadOffer: (state, action) => {
      state.offer = action.payload;
    },
    loadReviews: (state, action) => {
      state.rewiews = action.payload;
    },
    loadNearbyHotels: (state, action) => {
      state.nearbyHotels = action.payload;
    },
  },
});

export const {loadOffer, loadReviews, loadNearbyHotels} = offerSlice.actions;
