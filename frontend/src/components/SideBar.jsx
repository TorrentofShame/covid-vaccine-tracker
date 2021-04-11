import React from "react";
import LocList from "./LocList";

const SideBar = () => {
  return(
    <nav className="sidebar">
      <h1>Vaccine Locations</h1>
      <LocList />
    </nav>
  );
};

export default SideBar;
