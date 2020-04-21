import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Button = (props) => {
  const { children, className, size, disabled, icon, type, ...others } = props;

  const classes = classNames({
    [styles.mono__btn]: true,
    [className]: className,
    [styles[`mono__btn--${type}`]]: type && type !== "default",
    [styles[`mono__btn--${size}`]]: size && size !== "md",
    [styles[`mono__btn--disabled`]]: disabled,
  });

  return (
    <button className={classes} disabled={disabled} {...others}>
      <div className={styles.mono__btn__content}>{children}</div>
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  disabled: false
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
    "danger",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "icon"]),
  disabled: PropTypes.bool
};

export default Button;
