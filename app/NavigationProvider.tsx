"use client";

import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <NavContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavContext);
}
