import React, { useState } from 'react';
import { SelLocContext } from "./contexts";
import VaccineMap from './components/VaccineMap';
import SideBar from "./components/SideBar";
import './scss/App.scss';

const App = () => {

  const [SelLoc, setSelLoc] = useState({});

  return (
    <div className="App">
      <SelLocContext.Provider value={SelLoc}>
        <SideBar />
        <VaccineMap />
      </SelLocContext.Provider>
    </div>
  );
};

export default App;
