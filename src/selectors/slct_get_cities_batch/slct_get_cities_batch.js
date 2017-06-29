import { createSelector } from 'reselect';

import { batchCitiesSize } from '../../utils/const';
import chunk from 'lodash/chunk';

const getAllCities = state => state.cities.data;
const getCitiesBatchIndex = state => state.cities.citiesBatchIndex;

const sortSelectedCitiesBatch = (getAllCitiesParam, getCitiesBatchIndexParam) => (
  chunk(getAllCitiesParam, batchCitiesSize)[getCitiesBatchIndexParam-1] || []
);

/**
 * Get the edited zone in template (nested arrayà
 */
export const getSelectedCitiesBatch = createSelector(
  getAllCities,
  getCitiesBatchIndex,
  sortSelectedCitiesBatch
);