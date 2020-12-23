import { USER_LOADING, USER_LOADED } from '../types';

const initialState = {
  authenticated: null,
  loading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: {
          name: 'Caleb Abbott',
        },
      };
    default:
      return state;
  }
}
