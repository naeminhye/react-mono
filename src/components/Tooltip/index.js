import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Tooltip = (props) => {
  const { className, children, placement, ...others } = props;

  const classes = classNames({
    [styles["mono__tooltip"]]: true,
    [className]: className,
    [styles[`mono__tooltip--${placement}`]]: placement,
  });

  return (
    <div className={classes} {...others}>
      {children}
    </div>
  );
};

Tooltip.defaultProps = {
  placement: "top",
};

Tooltip.propTypes = {
  placement: PropTypes.oneOf(["top", "left", "right", "bottom"]),
  title: PropTypes.string.isRequired,
};
export default Tooltip;
