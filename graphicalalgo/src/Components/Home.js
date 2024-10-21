import React from "react";
import BannerBackground from "../Assets/hm-background.png";
import BannerImage from "../Assets/home-banner-removebg-preview.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/* <img src={BannerBackground} alt="" /> */}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Welcome to GraphicalAlgo: Interactive Algorithm Visualizer 
          </h1>
          <p className="primary-text">
          Explore and understand algorithms through interactive visualizations.
          Dive in and visualize the magic of algorithms!
          </p>
          <button className="secondary-button" onClick={()=>window.location.href='/Sort-Visualization/index.html'} >
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
