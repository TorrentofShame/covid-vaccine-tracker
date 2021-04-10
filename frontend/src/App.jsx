import React, { useState } from 'react';
// import { SelLocContext } from "./contexts";
import VaccineMap from './components/VaccineMap';
import SideBar from "./components/SideBar";
import './scss/App.scss';

const staticData = [
  {
      name: "Publix",
      position: { lat: 24, lng: 32},
      available: true,
      distance: 12,
  },
  {
      name: "Publix",
      position: { lat: 24, lng: 1},
      available: false,
      distance: 34,
  },
  {
      name: "Publix",
      position: { lat: 24, lng: 5},
      available: true,
      distance: 24,
  }
]

const dummyLocation = {
  lat: 20,
  lng: 7,
}

function App() {
  // eslint-disable-next-line no-unused-vars
  const [SelLoc, setSelLoc] = useState({});

  return (
    <div className="App">
      <SideBar />
      <VaccineMap currentLocation={dummyLocation} data={staticData} />
    </div>
  );
}

export default App;
