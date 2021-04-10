import React from "react";
import LocCard from "./LocCard";
import { LocsContext } from "./contexts";

const LocList = () => {

  const makeLs = (ls) => {
    ls.map((l, i) => <LocCard loc={l} />);
  };

  return(
    <LocsContext.Consumer>
      {(locs) => (
        {makeLs(locs) }
      )}
    </LocsContext.Consumer>
  );
};

export default LocList;
