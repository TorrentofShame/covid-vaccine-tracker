/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { InfoWindow } from "google-maps-react";

function InfoViewWrapper(props) {
    const infoWindowRef = React.createRef();
  const contentElement = document.createElement(`div`);
  useEffect(() => {
    ReactDOM.render(React.Children.only(props.children), contentElement);
    infoWindowRef.current.infowindow.setContent(contentElement);
  }, [props.children]);
  return <InfoWindow ref={infoWindowRef} {...props} />;
}

export default InfoViewWrapper;