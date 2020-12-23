import { DATA_LOADING, DATA_LOADED } from '../types';

const initialState = {
  loading: false,
  triviaData: null,
  currentQuestion: 0,
  correctAnswers: 0,
  categorySelected: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case DATA_LOADED:
      return {
        ...state,
        triviaData: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
