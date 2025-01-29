import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { cartActions } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ item }) => {
  // const dispatch = useDispatch();

  // const addToCartHandler = () => {
  //   dispatch(
  //     cartActions.addItem({
  //       id: item.id.toString(), // Ensure id is a string
  //       productName: item.productName,
  //       price: item.price,
  //       image: item.imgUrl, // Ensure correct property name
  //     })
  //   );
  // };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item">
        <div className="product_img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt={item.productName}
          />
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className="text-center d-block">{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    productName: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
