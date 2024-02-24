import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispath } from "../store";

type ProductList = [Product];

type Product = {
  id: number;
  productName: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
  favorite: boolean;
  brand: {
    id: number;
    name: string;
    country: string;
  };
};

const initialState = {
  productList: [] as Product[],
  counter: 0,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.productList = action.payload;
    },
  },
});

export const { logOut } = slice.actions;
export default slice.reducer;

export function getProductList() {
  return async (dispatch: AppDispath) => {
    try {
      const response = await fetch("api/products");
      const data = await response.json();
      console.log("response: ", data);

      dispatch(slice.actions.getProducts(data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
}
