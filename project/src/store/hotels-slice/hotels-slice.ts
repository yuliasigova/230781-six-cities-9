import {createSlice} from '@reduxjs/toolkit';
import {cities, NameSpace, SortType} from '../../const';
import {Offers} from '../../types/offers';

type InitialState = {
  city: string;
  offers: Offers;
  isDataLoaded: boolean;
  selectedOffer: number | null;
  sortType: SortType;
  favoriteOffers: Offers;
  isFavoriteLoaded: boolean;
}

const initialState: InitialState = {
  city: cities[0],
  offers: [],
  isDataLoaded: false,
  selectedOffer: null,
  sortType: SortType.Popular,
  favoriteOffers: [],
  isFavoriteLoaded: false,
};

export const hotelSlice = createSlice({
  name: NameSpace.hotels,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
      state.sortType = SortType.Popular;
    },
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    changeOffer: (state, action) => {
      state.selectedOffer = action.payload;
    },
    changeSort: (state, action) => {
      state.sortType = action.payload;
    },
    loadFavoriteOffers: (state, action) => {
      state.favoriteOffers = action.payload;
      state.isFavoriteLoaded = true;
    },
    changeFavorite: (state, action) => {
      const id = state.offers.findIndex((offer) => offer.id === action.payload.id);
      state.offers = [...state.offers.slice(0, id), action.payload, ...state.offers.slice(id + 1)];
    },
  },
});

export const {changeCity, loadOffers, changeOffer, changeSort, loadFavoriteOffers, changeFavorite} = hotelSlice.actions;
