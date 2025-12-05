"use client";

import React, { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface MenuContextType {
  showMenu: boolean;
  handleShowMenu: () => void;
}

const MenuContext = createContext({} as MenuContextType);

function MenuProvider({ children }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <MenuContext.Provider value={{ showMenu, handleShowMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
