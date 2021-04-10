import React from 'react';
import VaccineMap from './components/VaccineMap';
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
  return (
    <div className="App">
      <VaccineMap data={staticData} />
    </div>
  );
}

export default App;
