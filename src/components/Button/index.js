import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Button = props => {
  const { children, className, icon, type, ...others } = props;

  const classes = classNames({
    mono__btn: true,
    className: className || "",
    [`mono__btn--${type}`]: type && type !== "default"
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
  ])
};

export default Button;
