"use client";
import React, { useState, useEffect } from "react";
import { ProductProps } from "../(utils)/interfaces";
import { tempData } from "../(utils)/tempData";
import CustomCard from "../(component)/card/cardIndex";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelecter } from "@/redux/store";
import { getProductList } from "@/redux/features/product-slice";
import { useTopbarState } from "../(hooks)/topbarContext";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { topbarState } = useTopbarState();
  const productList = useAppSelecter(
    (state) => state.productReducer.productList
  );
  // const [products, setProducts] = useState<ProductProps[]>(tempData);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>(tempData);

  // Fetch products from API
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  useEffect(() => {
    const searchTerm = topbarState.searchTerm.toLowerCase();
    const selectedCategory = topbarState.selectedCategory;
    const selectedBrand = topbarState.selectedBrand;

    if (productList?.length >= 0) {
      const filteredList = productList?.filter((item) => {
        let flag = true;

        flag = flag && item?.productName.toLowerCase().includes(searchTerm);
        flag =
          flag &&
          (selectedCategory === "all"
            ? true
            : item?.category === selectedCategory);
        flag =
          flag &&
          (selectedBrand === "all"
            ? true
            : item?.brand?.name === selectedBrand);

        return flag;
      });

      setFilteredProducts(filteredList);
    }
  }, [topbarState, productList]);

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
