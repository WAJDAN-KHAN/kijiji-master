/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create the context
export const MenuContext = createContext();

// Create a provider component
const MenuProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider };
