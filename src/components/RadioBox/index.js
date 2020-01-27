import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./RadioBox.module.scss";

const RadioBox = props => {
  const {
    children,
    className,
    halfCheck,
    label,
    defaultChecked,
    ...others
  } = props;

  const classes = classNames({
    [styles[`mono__radio`]]: true,
    [className]: className
  });

  return (
    <div className={classes}>
      <input type="radio" {...others} />
      {label && <span className={styles["mono__radio--label"]}>{label}</span>}
    </div>
  );
};

RadioBox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  halfCheck: PropTypes.bool,
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

RadioBox.defaultProps = {
  halfCheck: false,
  defaultChecked: false
};

export default RadioBox;