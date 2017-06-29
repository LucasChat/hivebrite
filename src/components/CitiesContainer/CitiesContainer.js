import React, { PropTypes } from 'react';

import CityItem from '../CityItem/CityItem';
import CityBatchIndexItem from '../CityBatchIndexItem/CityBatchIndexItem';

import inRange from 'lodash/inRange';

import './CitiesContainer.less';

const CitiesContainer = ({
  cities,
  citiesBatchIndexMax,
  citiesBatchIndex,
  onChangeCitiesBatchIndex,
}) => (
  <div className="cities_container">
    {!inRange(citiesBatchIndex, -1, 4) &&
      <div>
        <CityBatchIndexItem
          value={1}
          onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
        />
        <CityBatchIndexItem
          value={2}
          onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
        />
        ..
      </div>
    }

    {citiesBatchIndex > 1 &&
      <CityBatchIndexItem
        value={citiesBatchIndex-1}
        onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
      />
    }
    <CityBatchIndexItem
      value={citiesBatchIndex}
      onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
    />
    {citiesBatchIndex < (citiesBatchIndexMax) &&
    <CityBatchIndexItem
      value={citiesBatchIndex+1}
      onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
    />
    }

    {!inRange(citiesBatchIndex, citiesBatchIndexMax-2, citiesBatchIndexMax+1) &&
    <div>
      ..
      <CityBatchIndexItem
        value={citiesBatchIndexMax-1}
        onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
      />
      <CityBatchIndexItem
        value={citiesBatchIndexMax}
        onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
      />
    </div>
    }

    {cities.map(city =>
      <CityItem
        city={city}
        key={city.rank}
      />
    )}
  </div>
);

CitiesContainer.propTypes = {
  cities: PropTypes.array,
  citiesBatchIndexMax: PropTypes.number,
  citiesBatchIndex: PropTypes.number,
  onChangeCitiesBatchIndex: PropTypes.func,
};

export default CitiesContainer;