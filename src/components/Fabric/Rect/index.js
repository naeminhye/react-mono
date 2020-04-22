import { useEffect } from "react";
import PropTypes from "prop-types";

const fabric = window.fabric;

const Rect = (props) => {
  const { canvas, ...others } = props;

  useEffect(() => {
    const rect = new fabric.Rect(others);
    canvas.add(rect);
  });

  return null;
};

Rect.propTypes = {
  canvas: PropTypes.object,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
};

Rect.defaultProps = {
  top: 0,
  left: 0,
  width: 50,
  height: 50,
  fill: "red",
};
export default Rect;
