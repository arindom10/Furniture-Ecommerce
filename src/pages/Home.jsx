import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import Services from "../Services/Services";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = Products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = Products.filter(
      (item) => item.category === "sofa"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  }, []);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Products in {year}!!!</p>
                <h2>Make Your Interior More Minimalistic & Modern!!!</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Earum nesciunt ipsam laborum dicta nisi est maxime labore.
                  Praesentium deleniti commodi sapiente placeat, culpa expedita
                  impedit.
                </p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__button"
                >
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero-img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text_center">
              <h2 className="section_title">Treading Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text_center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__Count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock__top__content">
                <h4 className="text-white fs-6">Limited Offers</h4>
                <h3 className="text-white fs-4">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__button store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
