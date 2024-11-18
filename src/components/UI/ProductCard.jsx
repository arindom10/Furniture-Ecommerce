import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";

const ProductCard = () => {
  return (
    <Col lg="3" md="4">
      <div className="product_item">
        <div className="product_img">
          <img src={productImg} alt="" />
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name">Modern Armchair</h3>
          <span className="text-center d-block">Chair</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">$299</span>
          <span>
            <i class="ri-add-line"></i>
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
