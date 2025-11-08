  // src/pages/Home.jsx
import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import BusinessModels from "../components/Businessmodels";
import NewLaunches from "../components/NewLaunches";
import BestSellers from "../components/BestSellers";
import PhotoBooks from "../components/PhotoBooks";
import Footer from "../components/Footer";
import CustomerReviews from "../components/CustomerReviews";
import FeaturesSection from "../components/FeatureSection";
import EnterpriseTrustBanner from "../components/EnterpriseTrustBanner";
// import EnterpriseTrustBanner from "../components/GetIn";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Categories/>
      <BusinessModels/>
      <NewLaunches/>
      <BestSellers/>
      <PhotoBooks/>

      <CustomerReviews/>
      <FeaturesSection/>
      <EnterpriseTrustBanner/>
       <Footer/>

    </div>
  );
};

export default Home;
