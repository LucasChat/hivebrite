import React, { PropTypes } from 'react';

import CityBatchIndexItem from '../CityBatchIndexItem/CityBatchIndexItem';

import inRange from 'lodash/inRange';

import './CityBatchIndexContainer.less';

const CityBatchIndexContainer = ({
  citiesBatchIndexMax,
  citiesBatchIndex,
  onChangeCitiesBatchIndex,
}) => (
  <div className="cities_batch_index_container">
    {!inRange(citiesBatchIndex, -1, 4) &&
    <div className="cities_batch_index_container__wrap">
      <CityBatchIndexItem
        value={1}
        onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
      />
      <CityBatchIndexItem
        value={2}
        onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
      />
    </div>
    }

    <div className="cities_batch_index_container__wrap">
      {citiesBatchIndex > 1 &&
        <CityBatchIndexItem
          value={citiesBatchIndex-1}
          onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
        />
      }
      <CityBatchIndexItem
        value={citiesBatchIndex}
        onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
        isSelected
      />
      {citiesBatchIndex < (citiesBatchIndexMax) &&
        <CityBatchIndexItem
          value={citiesBatchIndex+1}
          onChangeCitiesBatchIndex={onChangeCitiesBatchIndex}
        />
      }
    </div>

    {!inRange(citiesBatchIndex, citiesBatchIndexMax-2, citiesBatchIndexMax+1) &&
    <div className="cities_batch_index_container__wrap">
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
  </div>
);

CityBatchIndexContainer.propTypes = {
  citiesBatchIndexMax: PropTypes.number,
  citiesBatchIndex: PropTypes.number,
  onChangeCitiesBatchIndex: PropTypes.func,
};

export default CityBatchIndexContainer;