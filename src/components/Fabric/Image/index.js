import React, { useEffect } from "react";
import PropTypes from "prop-types";

const fabric = window.fabric;

const Image = props => {
  const { scale, ...others } = props;

  useEffect(() => {
    fabric.Image.fromURL(
      props.url,
      img => {
        img.scale(scale);
        props.canvas.add(img);
      },
      others
    );
  });
  return null;
};
Image.propTypes = {
  canvas: PropTypes.object,
  url: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired
};

Image.defaultProps = {
  scale: 1.0
};

export default Image;
