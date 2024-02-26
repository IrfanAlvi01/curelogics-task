"use client";
import React, { useState, useEffect } from "react";
import { ProductProps } from "../(utils)/interfaces";
import { tempData } from "../(utils)/tempData";
import CustomCard from "../(component)/card/cardIndex";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelecter } from "@/redux/store";
import { getProductList } from "@/redux/features/product-slice";
import { useTopbarState } from "../(hooks)/topbarContext";
import { useSidebarState } from "../(hooks)/sidebarContext";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { topbarState } = useTopbarState();
  const { sidebarState } = useSidebarState();
  const productList = useAppSelecter(
    (state) => state.productReducer.productList
  );
  // const [products, setProducts] = useState<ProductProps[]>(tempData);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);

  // Fetch products from API
  useEffect(() => {
    dispatch(getProductList());
  }, []);

  useEffect(() => {
    const searchTerm = topbarState.searchTerm.toLowerCase();
    const selectedCategory = topbarState.selectedCategory;
    const selectedBrand = topbarState.selectedBrand;

    const minPrice = sidebarState.minPrice;
    const maxPrice = sidebarState.maxPrice;
    const minRating = sidebarState.minRating;
    const maxRating = sidebarState.maxRating;
    const showFavorites = sidebarState.isFavourite;

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

        flag = flag && (!minPrice || item?.price >= minPrice);
        flag = flag && (!maxPrice || item?.price <= maxPrice);

        flag = flag && (!minRating || item?.rating >= minRating);
        flag = flag && (!maxRating || item?.rating <= maxRating);

        flag = flag && (!showFavorites || item?.favorite);

        return flag;
      });

      setFilteredProducts(filteredList);
    }
  }, [topbarState, sidebarState, productList]);

  const handleFavoriteToggle = (index: number) => {
    let updatedProducts = JSON.parse(JSON.stringify(filteredProducts));
    updatedProducts[index].favorite = !updatedProducts[index].favorite;
    setFilteredProducts(updatedProducts);
  };

  return (
    <>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
        {filteredProducts?.map((product, index) => (
          <CustomCard
            key={index}
            {...product}
            onFavoriteToggle={() => handleFavoriteToggle(index)}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
