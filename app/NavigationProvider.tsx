"use client";

import { createContext, useContext, useState } from "react";

type NavigationContextType = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const NavigationContext = createContext<NavigationContextType | null>(null);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <NavigationContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}