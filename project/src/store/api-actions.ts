import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {Offers} from '../types/offers';
import {loadOffers, requireAuthorization, saveUserData } from './action';
import {APIRoute, AuthorizationStatus} from '../const';
import {AuthData} from '../types/auth-data';
import { User } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { errorHandle } from '../services/error-handle';

export const fetchHotelsAction = createAsyncThunk(
  'data/fetchHotels',
  async () => {
    try {
      const {data} = await api.get<Offers>(APIRoute.Hotels);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {
      const {data} = await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(saveUserData(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({login: email, password}: AuthData) => {
    try {
      const {data} = await api.post<User>(APIRoute.Login, {email, password});
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(saveUserData(data));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      store.dispatch(saveUserData(null));
    } catch (error){
      errorHandle(error);
    }
  },
);
