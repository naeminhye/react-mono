import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";
import IconButton from "./IconButton";

const Button = (props) => {
  const {
    children,
    className,
    size,
    shape,
    disabled,
    icon,
    type,
    ...others
  } = props;

  const classes = classNames({
    [styles.mono__btn]: true,
    [className]: className,
    [styles[`mono__btn--type-${type}`]]: type && type !== "default",
    [styles[`mono__btn--size-${size}`]]: size && size !== "md",
    [styles[`mono__btn--disabled`]]: disabled,
    [styles[`mono__btn--shape-${shape}`]]: shape && shape !== "default",
  });

  return (
    <button className={classes} disabled={disabled} {...others}>
      <div className={styles.mono__btn__content}>{children}</div>
    </button>
  );
};

Button.defaultProps = {
  type: "default",
  disabled: false,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  shape: PropTypes.oneOf(["default", "round"]),
  type: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  disabled: PropTypes.bool,
};

Button.IconButton = IconButton;

export default Button;
