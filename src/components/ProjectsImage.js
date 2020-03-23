import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import "./Features.css";

const PreviewCompatibleImage = ({ imageInfo }) => {
  // const imageStyle = { borderRadius: '5px' }
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        // style={imageStyle}
        className="ImageElement"
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        // style={imageStyle}
        className="projectsImage"
        fluid={childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === "string")
    return (
      <img
        // style={imageStyle}
        className="projectsImage"
        src={image}
        alt={alt}
      />
    );

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
};

export default PreviewCompatibleImage;