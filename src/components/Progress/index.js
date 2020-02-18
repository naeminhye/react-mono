import React, { useState, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Progress.module.scss";
const Progress = props => {
  const {
    children,
    className,
    percent,
    strokeLinecap,
    strokeColor,
    strokeWidth,
    showInfo,
    type,
    width,
    ...others
  } = props;

  const classes = classNames({
    [styles["mono__progress"]]: true,
    [className]: className
    // [styles[type]]: type,
  });

  const strokeStyle = {
    padding: strokeWidth + "px",
    background: strokeColor || "#0a3961",
    width: percent + "%",
    borderRadius: strokeLinecap === "round" ? "50%" : "0"
  };

  return (
    <div className={classes} style={width && { width: width }}>
      <div className={styles["mono__progress--bar"]}>
        <div
          className={styles["mono__progress--stroke"]}
          style={strokeStyle}
        ></div>
      </div>
      {showInfo && (
        <div className={styles["mono__progress--info"]}>{percent}%</div>
      )}
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
  type: PropTypes.oneOf(["line", "circle"]),
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeLinecap: PropTypes.oneOf(["round", "square"]),
  strokeColor: PropTypes.string,
  showInfo: PropTypes.bool
};

Progress.defaultProps = {
  type: "line",
  percent: 0,
  strokeLinecap: "square",
  strokeWidth: 8,
  showInfo: true
};

export default Progress;
