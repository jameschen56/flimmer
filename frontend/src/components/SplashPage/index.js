import React from "react";
import { NavLink } from "react-router-dom";

import "./SplashPage.css";

const SplashPage = () => {
  return (
    <>
      <div className="splash-page-content">
        <div className="inspiration-text">
            <h1>Find your inspiration.</h1>

            <h3>Join the Flackr community, home to tens of billions of photos and 2 million groups</h3>

            <NavLink to="/signup"><button>Start for free</button></NavLink>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
