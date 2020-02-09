import React, { useEffect } from "react";
import PropTypes from "prop-types";

const fabric = window.fabric;

const Circle = props => {
  const { canvas, ...others } = props;

  useEffect(() => {
    const circle = new fabric.Circle(others);
    canvas.add(circle);
  });

  return null;
};

Circle.propTypes = {
  canvas: PropTypes.object,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
};

Circle.defaultProps = {
  top: 0,
  left: 0,
  radius: 5,
  fill: 'red',
};
export default Circle;
