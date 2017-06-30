import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { getAllCities } from '../../utils/api/city';
import {
  changeCitiesBatchIndex,
  selectCity,
  unselectCity,
  hoverCity,
  leaveHoverCity,
} from '../../actions';
import {
  getSelectedCitiesBatch,
} from '../../selectors/slct_get_cities_batch/slct_get_cities_batch';
import { batchCitiesSize } from '../../utils/const';

import CitiesContainer from '../CitiesContainer/CitiesContainer';
import MapContainer from '../MapContainer/MapContainer';

import './HomePage.less';

const HomePage = ({
  cities,
  citiesBatch,
  citiesBatchIndex,
  onChangeCitiesBatchIndex,
  selectedCity,
  hoveredCity,
  onSelectCity,
  onUnselectCity,
  onHoverCity,
  onLeaveHoverCity,
}) => (
  <div className="home_page">
    <CitiesContainer
      cities={citiesBatch}
      citiesBatchIndexMax={(cities.length / batchCitiesSize)}
      citiesBatchIndex={citiesBatchIndex}
      selectedCity={selectedCity}
      hoveredCity={hoveredCity}
      onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
      onSelectCity={onSelectCity}
      onUnselectCity={onUnselectCity}
      onHoverCity={onHoverCity}
      onLeaveHoverCity={onLeaveHoverCity}
    />
    <MapContainer
      cities={citiesBatch}
      selectedCity={selectedCity}
      hoveredCity={hoveredCity}
      onSelectCity={onSelectCity}
      onUnselectCity={onUnselectCity}
    />
  </div>
);

HomePage.propTypes = {
  onAppLaunch: PropTypes.func,
  cities: PropTypes.array,
  citiesBatch: PropTypes.array,
  citiesBatchIndex: PropTypes.number,
  onChangeCitiesBatchIndex: PropTypes.func,
  selectedCity: PropTypes.string,
  hoveredCity: PropTypes.string,
  onSelectCity: PropTypes.func,
  onUnselectCity: PropTypes.func,
  onHoverCity: PropTypes.func,
  onLeaveHoverCity: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cities: state.cities.data,
  citiesBatch: getSelectedCitiesBatch(state),
  citiesBatchIndex: state.cities.citiesBatchIndex,
  selectedCity: state.cities.selectedCity,
  hoveredCity: state.cities.hoveredCity,
});

const mapDispatchToProps = (dispatch) => ({
  onAppLaunch: () => dispatch(getAllCities()),
  onChangeCitiesBatchIndex: (value) => dispatch(changeCitiesBatchIndex(value)),
  onSelectCity: (value) => dispatch(selectCity(value)),
  onUnselectCity: (value) => dispatch(unselectCity(value)),
  onHoverCity: (value) => dispatch(hoverCity(value)),
  onLeaveHoverCity: (value) => dispatch(leaveHoverCity(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);