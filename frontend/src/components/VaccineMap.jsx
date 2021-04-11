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
function VaccineMap({ currentLocation, google, data, selled }) {

    const [showingInfoField, setShowingInfoField] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});
    const [subscribeModalVisible, setSubscribeModalVisible] = useState(false);
    const [markdict, setmarkdict] = useState({});

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

      let marklist = data.map(location => (
          <Marker
            title={location.name}
            body={location.available ? "Vaccines are in stock." : "No vaccines currently in stock."}
            position={{
              lat: location.point.coordinates[0],
              lng: location.point.coordinates[1]
            }}
            distance={location.distance}
            key={`${location.point.coordinates[0]} ${location.point.coordinates[1]}`}
            onClick={onMarkerClick}
          />
         ));



    return (
        <Map
          google={google}
          zoom={15}
          onClick={onMapClicked}
          className={"vaccine-map"}
          initialCenter={currentLocation}
       >

        {marklist }
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
    selled: PropTypes.any
}

export default GoogleApiWrapper({
    // eslint-disable-next-line no-undef
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(VaccineMap);
