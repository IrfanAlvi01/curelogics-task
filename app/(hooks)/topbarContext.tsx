"use client";
import { useAppSelecter } from "@/redux/store";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface TopbarState {
  searchTerm: string;
  searchField2: string;
  categories: string[];
  selectedCategory: string;
  brands: string[];
  selectedBrand: string;
}

interface TopbarContextProps {
  topbarState: TopbarState;
  updateTopbarState: (field: string, term: string | string[]) => void;
}

const TopbarContext = createContext<TopbarContextProps | undefined>(undefined);

export const TopbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [topbarState, setTopbarState] = useState<TopbarState>({
    searchTerm: "",
    searchField2: "",
    categories: [],
    selectedCategory: "all",
    brands: [],
    selectedBrand: "all",
  });
  const productList = useAppSelecter(
    (state) => state.productReducer.productList
  );

  useEffect(() => {
    if (productList?.length >= 0) {
      const allCategories = new Set();
      const allBrands = new Set();
      for (let i = 0; i < productList.length; i++) {
        const item = productList[i];
        allCategories.add(item?.category);
        allBrands.add(item?.brand?.name);
      }

      setTopbarState((prevState) => ({
        ...prevState,
        categories: Array.from(allCategories) as string[],
        brands: Array.from(allBrands) as string[],
      }));
    }
  }, [productList]);

  const updateTopbarState = (field: string, term: string | string[]) => {
    setTopbarState((prevState) => ({
      ...prevState,
      [field]: term,
    }));
  };

  return (
    <TopbarContext.Provider value={{ topbarState, updateTopbarState }}>
      {children}
    </TopbarContext.Provider>
  );
};

export const useTopbarState = () => {
  const context = useContext(TopbarContext);
  if (!context) {
    throw new Error("useTopbarState must be used within an TopbarProvider");
  }
  return context;
};
