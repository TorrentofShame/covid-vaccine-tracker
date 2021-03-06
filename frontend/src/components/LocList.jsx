/* eslint-disable no-unused-vars */
import React from "react";
import LocCard from "./LocCard";
import { LocsContext } from "../contexts";

const LocList = () => {

  const makeLs = (ls) => {
    return ls.map((l, i) => <LocCard key={i} loc={l} />);
  };

  return(
    <LocsContext.Consumer>
      {(locs) => makeLs(locs)}
    </LocsContext.Consumer>
  );
};

export default LocList;
