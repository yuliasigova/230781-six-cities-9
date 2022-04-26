import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';
import {UserData} from '../../types/user-data';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  user: UserData;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

export const userSlice = createSlice({
  name: NameSpace.user,
  initialState,
  reducers: {
    requireAuthorization: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    saveUserData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {requireAuthorization, saveUserData} = userSlice.actions;
