// Product.tsx - Component to display individual product card
import React from "react";
import { ProductProps } from "../utils/interfaces";

const Product: React.FC<ProductProps> = ({
  productName,
  category,
  price,
  rating,
  imageUrl,
  description,
  brand,
  //   onFavoriteToggle,
}) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={productName} />
      <h3>{productName}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Description: {description}</p>
      <p>Brand: {brand?.name}</p>
      <p>Country: {brand?.country}</p>
      {/* <button onClick={onFavoriteToggle}>Favorite</button> */}
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  );
};

export default Product;
