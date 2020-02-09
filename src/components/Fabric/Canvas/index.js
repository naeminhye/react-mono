import React, { Fragment, useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../../Button";
import classNames from "classnames";
import "fabric-webpack";
import styles from "./Canvas.module.scss";

const fabric = window.fabric;

const Canvas = props => {
  const { className, width, height, style, ...others } = props;
  const [canvas, setCanvas] = useState(null);

  const canvasRef = useRef(null);
  const classes = classNames({
    [styles["mono__canvas"]]: true,
    [className]: className
  });

  useEffect(() => {
    if (fabric && !canvas) {
      const _canvas = new fabric.Canvas(canvasRef.current);
      setCanvas(_canvas);
    }
  }, [canvas]);

  const children = React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      canvas: canvas
    });
  });
  return (
      <div className={classes} style={style}>
        <canvas ref={canvasRef} width={width} height={height} />
        {canvas && children}
      </div>
  );
};
Canvas.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

Canvas.defaultProps = {
  width: 600,
  height: 400
};

export default Canvas;
