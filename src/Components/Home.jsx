/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/nurburgring_mercedes_racing.jpg";

const imageAltText = "Mercedes racing at Nurburgring";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ color: "white", position: "relative", marginTop: "10%", marginBottom: "5%"}}>
        <div style={{ display: "block", position: "relative", padding: "2%", height: "auto", width: "70vw", backgroundColor: "rgba(10, 10, 10, 0.8)"}}>
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "90%"}}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
