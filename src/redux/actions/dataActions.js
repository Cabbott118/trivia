import axios from 'axios';
import { returnErrors } from './errorActions';
import { DATA_LOADING, DATA_LOADED } from '../types';

export const loadTrivia = () => (dispatch) => {
  dispatch({ type: DATA_LOADING });
  axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
    dispatch({ type: DATA_LOADED, payload: res.data });
  });
};
