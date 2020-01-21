import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = props => {
  const { children, className, icon, type, ...others } = props;

  const classes = classNames({
    btn: true,
    className: className || "",
    [`btn--${type}`]: type && type !== "default"
  });

  return (
    <button className={classes} {...others}>
      <div className="btn__content">{children}</div>
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
  ])
};

export default Button;
