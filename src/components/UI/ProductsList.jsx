import React from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};
ProductsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsList;
