import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductCard from "../components/users/ProductCard";
import macbook from "../assets/mbp-spacegray-select-202206-removebg-preview_1.jpg";
import iphone from "../assets/Phone-Camera-Webcam-Gear-GettyImages-1241495650.jpg";

const home = () => {
  const addToCart = () => {};

  return (
    <div className="main-container">
      <Header />
      <div className="carousel-container">
        <Carousel />
      </div>
      <h1 className="more-Products">
        Latest Products
        <Link to="/search" className="find-more">
          More
        </Link>
      </h1>
      <main className="home">
        <ProductCard
          productId={"41fex"}
          photo={macbook}
          name={"MacBook"}
          price={120000}
          stock={1}
          handler={addToCart}
        />
        <ProductCard
          productId={"41fex"}
          photo={macbook}
          name={"MacBook"}
          price={120000}
          stock={1}
          handler={addToCart}
        />
        <ProductCard
          productId={"41fex"}
          photo={iphone}
          name={"iPhone"}
          price={120000}
          stock={1}
          handler={addToCart}
        />
      </main>
      <Footer />
    </div>
  );
};

export default home;
