/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types';
import { Marker, InfoWindow } from 'google-maps-react';

function LocationMarker({ position, details }) {
    return (
        <Marker
         position={{ lat: -34.397, lng: 150.644 }}
        >
        </Marker>
    )
}

LocationMarker.propTypes = {
    position: PropTypes.object.isRequired,
    details: PropTypes.object.isRequired,
}

export default LocationMarker;