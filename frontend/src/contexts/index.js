import React from "react";

export const LocsContext = React.createContext([]);

export const SelLocContext = React.createContext({
  selloc: {},
  setSelLoc: () => {}
});

export const UsrLocContext = React.createContext({
  usrloc: {},
  setUsrLoc: () => {}
});
