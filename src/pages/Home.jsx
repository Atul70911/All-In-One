import React from "react";
import "../style/Home.css";

const Home = ({ setPage }) => {
  const handleClick = () => {
    setPage("Weather");
  };

  return (
    <div className="home">
      <div className="homeCard">
        <h1 className="homeTitle">Welcome to All-In-Website</h1>
        <p className="homeSubtitle">One place for multiple mini apps.</p>

        <button className="homeBtn" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
