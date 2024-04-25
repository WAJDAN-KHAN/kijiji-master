import React from "react";
import { MenuContext } from "../context/MenuContext";

export const useMenu = () => {
  const context = React.useContext(MenuContext);

  return context || {}; // Return an empty object if context is falsy to avoid the TypeError
};
