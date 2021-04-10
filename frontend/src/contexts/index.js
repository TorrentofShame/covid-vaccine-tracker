import React from "react";

export const LocsContext = React.createContext([]);

export const SelLocContext = React.createContext({
  selloc: {},
  setSelloc: () => {}
});

export const UsrLocContext = React.createContext({
  usrloc: {},
  setUsrloc: () => {}
});
