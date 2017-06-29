import {
  RECEIVE_ALL_CITIES,
  CHANGE_CITIES_BATCH_INDEX,
} from '../../actions';

const initialState = {
  citiesBatchIndex: 1,
  data: [],
};

const cities = (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_ALL_CITIES:
      return {
        citiesBatchIndex: 1,
        data: [
          ...payload,
        ],
      };
    case CHANGE_CITIES_BATCH_INDEX:
      return {
        ...state,
        citiesBatchIndex: payload,
      };
    default :
      return state;
  }
};

export default cities;
