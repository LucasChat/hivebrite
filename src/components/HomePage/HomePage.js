import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { getAllCities } from '../../utils/api/city';
import { changeCitiesBatchIndex } from '../../actions';
import {
  getSelectedCitiesBatch,
} from '../../selectors/slct_get_cities_batch/slct_get_cities_batch';
import { batchCitiesSize } from '../../utils/const';

import CitiesContainer from '../CitiesContainer/CitiesContainer';

import './HomePage.less';

const HomePage = ({ cities, citiesBatch, citiesBatchIndex, onChangeCitiesBatchIndex }) => (
  <div className="home_page">
    <CitiesContainer
      cities={citiesBatch}
      citiesBatchIndexMax={(cities.length / batchCitiesSize)}
      citiesBatchIndex={citiesBatchIndex}
      onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
    />
  </div>
);

HomePage.propTypes = {
  onAppLaunch: PropTypes.func,
  cities: PropTypes.array,
  citiesBatch: PropTypes.array,
  citiesBatchIndex: PropTypes.number,
  onChangeCitiesBatchIndex: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cities: state.cities.data,
  citiesBatch: getSelectedCitiesBatch(state),
  citiesBatchIndex: state.cities.citiesBatchIndex,
});

const mapDispatchToProps = (dispatch) => ({
  onAppLaunch: () => dispatch(getAllCities()),
  onChangeCitiesBatchIndex: (value) => dispatch(changeCitiesBatchIndex(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);