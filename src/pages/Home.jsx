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
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [polularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = Products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = Products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobileProducts = Products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = Products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = Products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
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
            <Col lg="6" md="12" className="count__down__col">
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

            <Col lg="6" md="12" className="text-end counter__img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals ">
        <Container>
          <Row>
            <Col lg="12" className="text_center mb-5">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular__category ">
        <Container>
          <Row>
            <Col lg="12" className="text_center mb-5">
              <h2 className="section_title">Popular in Category</h2>
            </Col>
            <ProductsList data={polularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
