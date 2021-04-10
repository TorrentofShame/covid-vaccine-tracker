import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SelLocContext, UsrLocContext, LocsContext } from "./contexts";
import VaccineMap from './components/VaccineMap';
import SideBar from "./components/SideBar";
import './scss/App.scss';

const staticData = [
  {
      name: "Publix",
      position: { lat: 24, lng: 32},
      address: "fakeaddr1",
      distance: "1mi",
      available: true,
  },
  {
      name: "Publix",
      position: { lat: 24, lng: 1},
      address: "fakeaddr2",
      distance: "1mi",
      available: false,
  },
  {
      name: "Publix",
      position: { lat: 24, lng: 5},
      address: "fakeaddr3",
      distance: "1mi",
      available: true,
  }
]


function App() {
  // eslint-disable-next-line no-unused-vars
  const [SelLoc, setSelLoc] = useState({});
  const [UsrLoc, setUsrLoc] = useState({});
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

  return (
    <Providers>
      <Container className="App" fluid>
        <Row>
          <Col sm={4}>
            <SideBar />
          </Col>
          <Col sm={8}>
            <VaccineMap data={staticData} />
          </Col>
        </Row>
      </Container>
    </Providers>
  );
}

export default App;
