/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { BsFillInboxFill } from 'react-icons/bs';
import { Button, Modal } from 'react-bootstrap';
import '../scss/map.scss';
import SubscribeModal from './SubscribeModal';
import InfoViewWrapper from './InfoViewWrapper';

// eslint-disable-next-line no-unused-vars
function VaccineMap({ currentLocation, google, data }) {

    const [showingInfoField, setShowingInfoField] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});
    const [subscribeModalVisible, setSubscribeModalVisible] = useState(false);

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
          zoom={5}
          onClick={onMapClicked}
          className={"vaccine-map"}
          initialCenter={currentLocation}
       >
        {data.map(location => (
            <Marker
              title={location.name}
              body={location.available ? "Vaccines are in stock." : "No vaccines currently in stock."}
              position={location.position}
              distance={location.distance}
              key={`${location.position.lng} ${location.position.lat}`}
              onClick={onMarkerClick}
            />
           ))}

           <SubscribeModal show={subscribeModalVisible} handleClose={() => setSubscribeModalVisible(false)} />

          <InfoViewWrapper
            marker={activeMarker}
            visible={showingInfoField}
          >
            <div>
              <h1>{selectedPlace.title}</h1>
              <p>{selectedPlace.body}</p>
              <p>{`${selectedPlace.distance} mile(s) away`}</p>
              <Button
               variant="primary"
               onClick={() => {
                   setSubscribeModalVisible(true);
               }}
              >
                  <BsFillInboxFill  size={24} style={{marginRight: 10}} />
                  Subscribe To Updates
              </Button>
            </div>
        </InfoViewWrapper>

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