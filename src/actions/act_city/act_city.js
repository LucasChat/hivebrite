export const RECEIVE_ALL_CITIES = 'RECEIVE_ALL_CITIES';
export const receiveAllCities = (payload) => ({
  type: RECEIVE_ALL_CITIES,
  payload,
});

export const CHANGE_CITIES_BATCH_INDEX = 'CHANGE_CITIES_BATCH_INDEX';
export const changeCitiesBatchIndex = (payload) => ({
  type: CHANGE_CITIES_BATCH_INDEX,
  payload,
});

export const SELECT_CITY = 'SELECT_CITY';
export const selectCity = (payload) => ({
  type: SELECT_CITY,
  payload,
});

export const UNSELECT_CITY = 'UNSELECT_CITY';
export const unselectCity = (payload) => ({
  type: UNSELECT_CITY,
  payload,
});

export const HOVER_CITY = 'HOVER_CITY';
export const hoverCity = (payload) => ({
  type: HOVER_CITY,
  payload,
});

export const LEAVE_HOVER_CITY = 'LEAVE_HOVER_CITY';
export const leaveHoverCity = (payload) => ({
  type: LEAVE_HOVER_CITY,
  payload,
});