import React, { PropTypes } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { mapInitialPosition, mapInitialZoom } from '../../utils/const';

import './MapContainer.less';

const MapContainer = ({
  cities,
  selectedCity,
  hoveredCity,
  onSelectCity,
  onUnselectCity,
}) => (
  <Map center={mapInitialPosition} zoom={mapInitialZoom} className="map_container" animate>
    <TileLayer
      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
    />
    {cities.map((city =>
      city.rank === selectedCity ?
      <ExtendedMarker
        position={[city.latitude, city.longitude]}
        key={city.rank}
        onClick={() => onSelectCity(city.rank)}
        style={{
          width: '50px',
        }}
        draggable
      >
        <Popup onClose={() => onUnselectCity(city.rank)} onOpen={() => onSelectCity(city.rank)}>
          <span>
            <div className="map_container__popup__name">{city.city}</div>
            <div className="map_container__popup__population">Population: {city.population}</div>
            <div className="map_container__popup__state">State: {city.state}</div>
          </span>
        </Popup>
      </ExtendedMarker> :
      <Marker
        position={[city.latitude, city.longitude]}
        key={city.rank}
        onClick={() => onSelectCity(city.rank)}
        draggable={city.rank === hoveredCity}
      >
        <Popup>
          <span>
            <div>{city.city}</div>
            <div>Population: {city.population}</div>
          </span>
        </Popup>
      </Marker>
    ))}
  </Map>
);

MapContainer.propTypes = {
  cities: PropTypes.array,
  selectedCity: PropTypes.string,
  hoveredCity: PropTypes.string,
  onSelectCity: PropTypes.func,
  onUnselectCity: PropTypes.func,
};

export default MapContainer;

class ExtendedMarker extends Marker {
  componentDidMount() {
    super.componentDidMount();
    this.leafletElement.openPopup();
  }
}