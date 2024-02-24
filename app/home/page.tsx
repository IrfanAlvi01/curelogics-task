"use client";
import React, { useState, useEffect } from "react";
import ProductList from "../(component)/ProductList";
import { ProductProps } from "../utils/interfaces";
import { tempData } from "../utils/tempData";

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>(tempData);
  const [filteredProducts, setFilteredProducts] =
    useState<ProductProps[]>(tempData);

  // Fetch products from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sore-puce-butterfly-cap.cyclic.app/products"
        );
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    // Api isnt working atm.
    // fetchData();
  }, []);

  // Handle favorite toggle
  // const handleFavoriteToggle = (index: number) => {
  //   const updatedProducts = [...products];
  //   updatedProducts[index].isFavorite = !updatedProducts[index].isFavorite;
  //   setProducts(updatedProducts);
  // };

  // Implement search, filter, and sort functionalities here

  return (
    <div className="app">
      {/* Add search, filter, and sort components here */}

      <ProductList
        products={filteredProducts}
        // onFavoriteToggle={handleFavoriteToggle}
      />
    </div>
  );
};

export default Home;
