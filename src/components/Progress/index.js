import React, { useRef, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Progress.module.scss";
const Progress = (props) => {
  const {
    className,
    percent,
    strokeLinecap,
    strokeColor,
    strokeWidth,
    showInfo,
    type,
    width,
  } = props;
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--size", width + "px");
      containerRef.current.style.setProperty(
        "--stroke-width",
        strokeWidth + "px"
      );
    }
  });

  const classes = classNames({
    [styles["mono__progress"]]: true,
    [className]: className,
    [styles[type]]: type,
  });

  const strokeStyle = {
    padding: strokeWidth / 2 + "px",
    background: strokeColor || "#0a3961",
    width: percent + "%",
    borderRadius: strokeLinecap === "round" ? "50%" : "0",
  };

  const pieClasses = classNames({
    [styles["mono__progress--pie-chart"]]: true,
    [styles["gt-50"]]: percent > 50,
  });

  return type === "line" ? (
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
  ) : (
    <div className={classes}>
      <div className={pieClasses} ref={containerRef}>
        <div className={styles["ppc-progress"]}>
          <div
            className={styles["ppc-progress-fill"]}
            style={{ transform: `rotate(${(360 * percent) / 100}deg)` }}
          ></div>
        </div>
        <div className={styles["ppc-percents"]}>
          <div className={styles["pcc-percents-wrapper"]}>
            {showInfo && <span>{percent}%</span>}
          </div>
        </div>
      </div>
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
  showInfo: PropTypes.bool,
};

Progress.defaultProps = {
  type: "line",
  percent: 0,
  strokeLinecap: "square",
  strokeWidth: 10,
  showInfo: true,
};

export default Progress;
