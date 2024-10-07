import React, { Component } from "react";

// Importing Link component from react-router-dom to handle navigation
import { Link } from "react-router-dom";
// Importing image for the banner from local assets
import img from "../images/cosmos/korica-ptici-v-noshta1-190x122.jpg";

// Creating a Banner component as a class-based React component
export default class Banner extends Component {
  render() {
    return (
      <>
        {/* Main container for the banner */}
        <div className="banner-container">
          {/* Centering the banner content */}
          <div className="banner-center">
            {/* Text and title area inside the banner */}
            <div className="banner-text banner-size">
              {/* Main heading of the banner */}
              <h1>Фондация Космос</h1>
              {/* Subtitle or secondary heading */}
              <h3>Димитър Брацов</h3>
              {/* Link button to navigate back to home page */}
              <Link className="btn-primary" to="/">
                Начало
              </Link>
            </div>
          </div>

          {/* Image section of the banner */}
          <div className="banner-size">
            {/* Link wrapping the image, directing to the /books route */}
            <Link to="/books">
              {/* Displaying an image with the imported img source */}
              <img src={img} alt="first page" />
            </Link>
          </div>
        </div>
      </>
    );
  }
}
