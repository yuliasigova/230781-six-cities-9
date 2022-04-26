import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../store';
import {store} from '../store';
import {Offers, Offer, Favorite} from '../types/offers';
import { Reviews, NewReview, Review} from '../types/reviews';
import {requireAuthorization, saveUserData } from './user-slice/user-slice';
import {loadOffers, loadFavoriteOffers, changeFavorite} from './hotels-slice/hotels-slice';
import {loadOffer, loadReviews, loadNearbyHotels} from './offer-slice/offer-slice';
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

export const fetchHotelAction = createAsyncThunk(
  'data/fetchHotel',
  async (idHotels:number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${idHotels}`);
      store.dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchNearbyHotelAction = createAsyncThunk(
  'data/fetchNearbyHotel',
  async (idHotels:number) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${idHotels}/nearby`);
      store.dispatch(loadNearbyHotels(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchFavoriteHotelAction = createAsyncThunk(
  'data/fetchFavoriteHotel',
  async () => {
    try {
      const {data} = await api.get<Offers>(`${APIRoute.Favorite}`);
      store.dispatch(loadFavoriteOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postFavoriteHotelAction = createAsyncThunk(
  'data/postFavoriteHotel',
  async ({idHotels, status}:Favorite) => {
    try {
      const {data} = await api.post<Offers>(`${APIRoute.Favorite}/${idHotels}/${status}`);
      store.dispatch(changeFavorite(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
export const fetchRewiewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (idHotels:number) => {
    try {
      const {data} = await api.get<Reviews>(`${APIRoute.Comments}/${idHotels}`);
      store.dispatch(loadReviews(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const postReviewsAction = createAsyncThunk(
  'data/postReviews',
  async ({rating, comment, idHotels}:NewReview) => {
    try {
      const {data} = await api.post<Review>(`${APIRoute.Comments}/${idHotels}`, {rating, comment});
      store.dispatch(loadReviews(data));
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
