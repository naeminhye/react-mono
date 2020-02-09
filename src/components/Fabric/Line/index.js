import React, { useEffect } from "react";
import PropTypes from "prop-types";

const fabric = window.fabric;

const Line = props => {
  const { canvas, ...others } = props;

  useEffect(() => {
    const line = new fabric.Line(others);
    canvas.add(line);
  });

  return null;
};

Line.propTypes = {
  canvas: PropTypes.object,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  // width: PropTypes.number.isRequired,
  // height: PropTypes.number.isRequired,
  // fill: PropTypes.string.isRequired
};

Line.defaultProps = {
  top: 0,
  left: 0,
  // width: 50,
  // height: 50,
  // fill: "red"
};
export default Line;
