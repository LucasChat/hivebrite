import React, { PropTypes } from 'react';

import CityItem from '../CityItem/CityItem';
import CityBatchIndexContainer from '../CityBatchIndexContainer/CityBatchIndexContainer';

import './CitiesContainer.less';

const CitiesContainer = ({
  cities,
  citiesBatchIndexMax,
  citiesBatchIndex,
  selectedCity,
  hoveredCity,
  onChangeCitiesBatchIndex,
  onSelectCity,
  onUnselectCity,
  onHoverCity,
  onLeaveHoverCity,
}) => (
  <div className="cities_container">
    <CityBatchIndexContainer
      onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
      citiesBatchIndex={citiesBatchIndex}
      citiesBatchIndexMax={citiesBatchIndexMax}
    />
    <div className="city_item__container">
      {cities.map(city =>
        <CityItem
          city={city}
          key={city.rank}
          hoveredCity={hoveredCity}
          onSelectCity={onSelectCity}
          onUnselectCity={onUnselectCity}
          onHoverCity={onHoverCity}
          onLeaveHoverCity={onLeaveHoverCity}
          isSelected={selectedCity === city.rank}
        />
      )}
    </div>
    <CityBatchIndexContainer
      onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
      citiesBatchIndex={citiesBatchIndex}
      citiesBatchIndexMax={citiesBatchIndexMax}
    />
  </div>
);

CitiesContainer.propTypes = {
  cities: PropTypes.array,
  citiesBatchIndexMax: PropTypes.number,
  citiesBatchIndex: PropTypes.number,
  selectedCity: PropTypes.string,
  hoveredCity: PropTypes.string,
  onChangeCitiesBatchIndex: PropTypes.func,
  onSelectCity: PropTypes.func,
  onUnselectCity: PropTypes.func,
  onHoverCity: PropTypes.func,
  onLeaveHoverCity: PropTypes.func,
};

export default CitiesContainer;