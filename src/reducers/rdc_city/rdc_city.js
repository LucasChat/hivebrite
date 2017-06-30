import {
  RECEIVE_ALL_CITIES,
  CHANGE_CITIES_BATCH_INDEX,
  SELECT_CITY,
  UNSELECT_CITY,
  HOVER_CITY,
  LEAVE_HOVER_CITY,
} from '../../actions';

const initialState = {
  citiesBatchIndex: 1,
  selectedCity: '',
  hoveredCity: '',
  data: [],
};

const cities = (state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVE_ALL_CITIES:
      return {
        ...state,
        data: [
          ...payload,
        ],
      };
    case CHANGE_CITIES_BATCH_INDEX:
      return {
        ...state,
        citiesBatchIndex: payload,
      };
    case SELECT_CITY:
      return {
        ...state,
        selectedCity: payload,
      };
    case UNSELECT_CITY:
      return {
        ...state,
        selectedCity: '',
      };
    case HOVER_CITY:
      return {
        ...state,
        hoveredCity: payload,
      };
    case LEAVE_HOVER_CITY:
      return {
        ...state,
        hoveredCity: '',
      };
    default :
      return state;
  }
};

export default cities;
