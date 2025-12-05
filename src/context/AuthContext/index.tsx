"use client";

import React, { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  isLogged: boolean;
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: Props) {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLogged }}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
