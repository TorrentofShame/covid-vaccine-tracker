import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SelLocContext, UsrLocContext, LocsContext } from "./contexts";
import VaccineMap from './components/VaccineMap';
import SideBar from "./components/SideBar";
//import './scss/index.scss';


function App() {
  // eslint-disable-next-line no-unused-vars
  const [SelLoc, setSelLoc] = useState({});
  const [UsrLoc, setUsrLoc] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [Locs, setLocs] = useState([]);

  const Providers = ({children}) => (
    <UsrLocContext.Provider value={{UsrLoc, setUsrLoc}}>
      <SelLocContext.Provider value={{SelLoc, setSelLoc}}>
        <LocsContext.Provider value={Locs}>
          {children }
        </LocsContext.Provider>
      </SelLocContext.Provider>
    </UsrLocContext.Provider>
  );
  Providers.propTypes = {
    children: PropTypes.any.isRequired
  };

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUsrLoc({lat: position.coords.latitude, lng: position.coords.longitude})
        let d = {lat: position.coords.latitude, lng: position.coords.longitude};

        console.log(d);
        // Call API
        fetch(`http://covid_tracker.fetchit.dev/api/maps/get_data/?lat=${d.lat}&long=${d.lng}&radius=555555555`, { 
        })
        .then(result => result.json())
        .then(json => setLocs(json.d))
        .catch(err => console.log(err));

      }, () => {
        console.log("Could not get location permission");
      });
    } else {
      console.log("Unable get Location.");
    }
  }

  useEffect(() => {
    getLocation();

  }, []);

  return (
    <Providers>
      <Container className="App" fluid>
        <Row>
          <Col sm={4}>
            <SideBar />
          </Col>
          <Col className="mapcol">
            <VaccineMap currentLocation={UsrLoc} data={Locs} selled={SelLoc} />
          </Col>
        </Row>
      </Container>
    </Providers>
  );
}

export default App;
