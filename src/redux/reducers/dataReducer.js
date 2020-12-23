import { DATA_LOADING, DATA_LOADED, NEXT_QUESTION } from '../types';

const initialState = {
  loading: false,
  triviaData: null,
  question: {},
  currentIndex: 0,
  correct: 0,
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
        loading: false,
        triviaData: action.payload,
        question: action.payload.results[0],
        categorySelected: true,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        question: action.payload.results[state.currentIndex],
      };
    default:
      return state;
  }
}
