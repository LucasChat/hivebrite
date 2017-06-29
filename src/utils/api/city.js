import { loggedInstance } from './utils';

import {
  receiveAllCities,
} from '../../actions';

export const GET_ALL_CITIES = 'GET_ALL_CITIES';
export const getAllCities = () => (
  dispatch => dispatch({
    type: GET_ALL_CITIES,
    payload: Promise.resolve(
      loggedInstance().get('cities.json')
        .then((response) => {
          dispatch(receiveAllCities(response.data));
        })
        .catch((error) => {
          console.log(error);
        })
    ),
  })
);
