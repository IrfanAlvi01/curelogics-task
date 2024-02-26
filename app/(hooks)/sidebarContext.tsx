"use client";
import { useAppSelecter } from "@/redux/store";
import { useState, ReactNode, useContext, createContext } from "react";

interface SidebarState {
  minPrice: number;
  maxPrice: number;
  minRating: number;
  maxRating: number;
  isFavourite: boolean;
}

interface SidebarContextProps {
  sidebarState: SidebarState;
  updateSidebarState: (term: SidebarState) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [sidebarState, setTopbarState] = useState<SidebarState>({
    minPrice: 1,
    maxPrice: 10000,
    minRating: 0.1,
    maxRating: 5,
    isFavourite: false,
  });
  const productList = useAppSelecter(
    (state) => state.productReducer.productList
  );

  const updateSidebarState = (value: SidebarState) => {
    console.log("filtered updated: ", value);
    setTopbarState(value);
  };

  return (
    <SidebarContext.Provider value={{ sidebarState, updateSidebarState }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarState = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarState must be used within an SidebarProvider");
  }
  return context;
};
