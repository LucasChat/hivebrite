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