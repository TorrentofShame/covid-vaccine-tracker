import React from "react";
import UsrLocInput from "./UsrLocInput";
import LocList from "./LocList";

const SideBar = () => {
  return(
    <nav className="sidebar">
      <h1>Vaccine Locations</h1>
      <UsrLocInput />
      <LocList />
    </nav>
  );
};

export default SideBar;
