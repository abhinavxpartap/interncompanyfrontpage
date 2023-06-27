import { createStore } from 'redux';
import { UserInterface } from '../types';

export interface AppStateType {
  user?: UserInterface | null;
}

const initialState: AppStateType = {
  user: null,
};

export const SET_USER = Symbol('SET_USER');

const store = createStore(
  (state: AppStateType = initialState, action: any): AppStateType => {
    const { type } = action;
    switch (type) {
      case SET_USER:
        return { ...state, user: action.user };

      default:
        return state;
    }
  }
);

export default store;
