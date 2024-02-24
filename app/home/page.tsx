"use client";
import React, { useState, useEffect } from "react";
import { ProductProps } from "../utils/interfaces";
import { tempData } from "../utils/tempData";
import CustomCard from "../(component)/card/cardIndex";
import { Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelecter } from "@/redux/store";
import { getProductList } from "@/redux/features/product-slice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelecter(
    (state) => state.productReducer.productList
  );
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);

  // Fetch products from API
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  useEffect(() => {
    console.log("product list: ", productList);

    setProducts(productList);
    setFilteredProducts(productList);
  }, [productList]);

  // Handle favorite toggle
  // const handleFavoriteToggle = (index: number) => {
  //   const updatedProducts = [...products];
  //   updatedProducts[index].isFavorite = !updatedProducts[index].isFavorite;
  //   setProducts(updatedProducts);
  // };

  // Implement search, filter, and sort functionalities here

  return (
    <>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
        {filteredProducts?.map((product, index) => (
          <CustomCard
            key={index}
            {...product}
            // onFavoriteToggle={() => onFavoriteToggle(index)}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
