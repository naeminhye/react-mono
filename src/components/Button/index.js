import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = props => {
  const { children, className, size, icon, type, ...others } = props;

  const classes = classNames({
    mono__btn: true,
    [className]: className || "",
    [`mono__btn--${type}`]: type && type !== "default",
    [`mono__btn--${size}`]: size && size !== "md"
  });

  return (
    <button className={classes} {...others}>
      <div className="mono__btn__content">{children}</div>
    </button>
  );
};

Button.defaultProps = {
  type: "default"
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "danger"
  ]),
  size: PropTypes.oneOf([
    "xs",
    "sm",
    "md",
    "lg",
  ]),
};

export default Button;
