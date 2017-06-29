import React, { PropTypes } from 'react';

import './CityBatchIndexItem.less';

const CityBatchIndexItem = ({ value, onChangeCitiesBatchIndex }) => (
  <div
    className="city_batch_index_item"
    onClick={() => onChangeCitiesBatchIndex(value)}
  >
    {value}
  </div>
);

CityBatchIndexItem.propTypes = {
  value: PropTypes.number,
  onChangeCitiesBatchIndex: PropTypes.func,
};

export default CityBatchIndexItem;