// ProductList.tsx - Component to display a list of products
import React from "react";
import Product from "./Product";
import { ProductListProps } from "../utils/interfaces";

const ProductList: React.FC<ProductListProps> = ({
  products,
  // onFavoriteToggle,
}) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          {...product}
          // onFavoriteToggle={() => onFavoriteToggle(index)}
        />
      ))}
    </div>
  );
};

export default ProductList;
