import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <ProductCard item={item} key={item} />
      ))}
    </>
  );
};

export default ProductsList;
