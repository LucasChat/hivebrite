import React, { PropTypes } from 'react';
import get from 'lodash/get';

import './CityItem.less';

const CityItem = ({ city }) => (
  <div className="city_item">
    <div className="city_item__name">City: {get(city, ['city'])}</div>
    <div className="city_item__population">Population: {get(city, ['population'])}</div>
    <div className="city_item__state">State: {get(city, ['state'])}</div>
  </div>
);

CityItem.propTypes = {
  city: PropTypes.object,
};

export default CityItem;