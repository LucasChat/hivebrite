import React, { PropTypes } from 'react';
import get from 'lodash/get';
import concat from 'lodash/concat';
import { generateClassNameWithModifier } from '../../utils/styleModifierGenerator';

import './CityItem.less';

const CityItem = ({
  city,
  isSelected,
  onSelectCity,
  onUnselectCity,
  onHoverCity,
  onLeaveHoverCity,
}) => {
  const cityItemClass = generateClassNameWithModifier(
    'city_item',
    concat(isSelected && 'selected')
  );
  return (
    <div
      className={cityItemClass}
      onClick={() => (
        isSelected ?
        onUnselectCity(city.rank) :
        onSelectCity(city.rank)
      )}
      onMouseEnter={
        () => onHoverCity(city.rank)
      }
      onMouseLeave={
        () => onLeaveHoverCity(city.rank)
      }
    >
      <div className="city_item__name">{get(city, ['city'])}</div>
      <div className="city_item__population">Population: {get(city, ['population'])}</div>
      <div className="city_item__state">State: {get(city, ['state'])}</div>
      <div className="city_item__rank">
        Number {get(city, ['rank'])} of the most populous cities
      </div>
    </div>
  );
};

CityItem.propTypes = {
  city: PropTypes.object,
  isSelected: PropTypes.bool,
  onSelectCity: PropTypes.func,
  onUnselectCity: PropTypes.func,
  onHoverCity: PropTypes.func,
  onLeaveHoverCity: PropTypes.func,
};

export default CityItem;