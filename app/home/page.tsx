"use client";
import React, { useState, useEffect } from "react";
import { ProductProps } from "../utils/interfaces";
import { tempData } from "../utils/tempData";
import CustomCard from "../(component)/card/cardIndex";
import { Box } from "@mui/material";

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>(tempData);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>(tempData);

  // Fetch products from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "api/products"
        );
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    // Api isnt working atm.
    fetchData();
  }, []);

  // Handle favorite toggle
  // const handleFavoriteToggle = (index: number) => {
  //   const updatedProducts = [...products];
  //   updatedProducts[index].isFavorite = !updatedProducts[index].isFavorite;
  //   setProducts(updatedProducts);
  // };

  // Implement search, filter, and sort functionalities here

  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-evenly"}>
      {filteredProducts.map((product, index) => (
        <CustomCard
          key={index}
          {...product}
          // onFavoriteToggle={() => onFavoriteToggle(index)}
        />
      ))}
    </Box>
  );
};

export default Home;
