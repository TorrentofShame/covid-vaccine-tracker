import React from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../scss/map.scss';

// eslint-disable-next-line no-unused-vars
function VaccineMap({ currentLocation, google, PlottedLocations }) {
    return (
        <Map
        google={google}
        zoom={14}
        className={"vaccine-map"}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      >
         <Marker
      position={{ lat: -34.397, lng: 150.644 }}
    />
      </Map>
    )
}

VaccineMap.propTypes = {
    currentLocation: PropTypes.object,
    google: PropTypes.objectOf(globalThis.google),
    PlottedLocations: PropTypes.arrayOf(PropTypes.object),
}

export default GoogleApiWrapper({
    // eslint-disable-next-line no-undef
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(VaccineMap);