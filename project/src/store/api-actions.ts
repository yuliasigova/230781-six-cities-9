import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {Offers} from '../types/offers';
import {loadOffers} from './action';
import {APIRoute} from '../const';

export const fetchHotelsAction = createAsyncThunk(
  'data/fetchHotels',
  async () => {
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    store.dispatch(loadOffers(data));
  },
);
