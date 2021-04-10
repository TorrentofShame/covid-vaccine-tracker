import React, { useState } from 'react';
import { SelLocContext } from "./contexts";
import VaccineMap from './components/VaccineMap';
import SideBar from "./components/SideBar";
import './scss/App.scss';

const staticData = [
  {
      name: "Publix",
      position: { lat: 24, lng: 32},
      available: true,
  },
  {
      name: "Publix",
      position: { lat: 24, lng: 1},
      available: false,
  },
  {
      name: "Publix",
      position: { lat: 24, lng: 5},
      available: true,
  }
]

function App() {
  // eslint-disable-next-line no-unused-vars
  const [SelLoc, setSelLoc] = useState({});

  return (
    <div className="App">
      <SelLocContext.Provider value={{SelLoc, setSelLoc}}>
        <SideBar />
        <VaccineMap data={staticData} />
      </SelLocContext.Provider>
    </div>
  );
}

export default App;
