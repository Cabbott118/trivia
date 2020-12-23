import axios from 'axios';
import { returnErrors } from './errorActions';
import { DATA_LOADING, DATA_LOADED, NEXT_QUESTION } from '../types';

export const loadTrivia = (category) => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  axios
    .get(
      `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`
    )
    .then((res) => {
      dispatch({ type: DATA_LOADED, payload: res.data });
    });
};

export const nextQuestion = (data) => (dispatch) => {
  dispatch({ type: NEXT_QUESTION, payload: data });
};
