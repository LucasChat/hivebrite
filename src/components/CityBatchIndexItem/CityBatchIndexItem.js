import React, { PropTypes } from 'react';
import concat from 'lodash/concat';
import { generateClassNameWithModifier } from '../../utils/styleModifierGenerator';

import './CityBatchIndexItem.less';

const CityBatchIndexItem = ({ value, isSelected, onChangeCitiesBatchIndex }) => {
  const CityBatchIndexItemClass = generateClassNameWithModifier(
    'city_batch_index_item',
    concat(isSelected && 'selected')
  );
  return (
    <div
      className={CityBatchIndexItemClass}
      onClick={() => onChangeCitiesBatchIndex(value)}
    >
      {value}
    </div>
  );
};

CityBatchIndexItem.propTypes = {
  value: PropTypes.number,
  isSelected: PropTypes.bool,
  onChangeCitiesBatchIndex: PropTypes.func,
};

export default CityBatchIndexItem;