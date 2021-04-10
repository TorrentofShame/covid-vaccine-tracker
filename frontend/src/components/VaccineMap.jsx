/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../scss/map.scss';

// eslint-disable-next-line no-unused-vars
function VaccineMap({ currentLocation, google, data }) {

    const [showingInfoField, setShowingInfoField] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});

    const onMapClicked = (props) => {
        if (showingInfoField) {
          setShowingInfoField(false);
          setActiveMarker(null);
        }
      };

    const onMarkerClick = (props, marker, e) => {
        setSelectedPlace(props);
        setActiveMarker(marker);
        setShowingInfoField(true);
    };

    return (
        <Map
          google={google}
          zoom={2}
          onClick={onMapClicked}
          className={"vaccine-map"}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
       >
        {data.map(location => (
            <Marker
              title={location.name}
              body={location.available ? "Vaccines are in stock." : "No vaccines currently in stock."}
              position={location.position}
              key={location.name}
              onClick={onMarkerClick}
            />
           ))}

          <InfoWindow
            marker={activeMarker}
            visible={showingInfoField}
          >
            <div>
              <h1>{selectedPlace.title}</h1>
              <p>{selectedPlace.body}</p>
            </div>
        </InfoWindow>
      </Map>
    )
}

VaccineMap.propTypes = {
    currentLocation: PropTypes.object,
    google: PropTypes.objectOf(globalThis.google),
    data: PropTypes.arrayOf(PropTypes.object),
}

export default GoogleApiWrapper({
    // eslint-disable-next-line no-undef
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(VaccineMap);