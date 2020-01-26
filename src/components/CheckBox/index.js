import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./CheckBox.module.scss";

const CheckBox = props => {
  const {
    children,
    className,
    halfCheck,
    ...others
  } = props;

  const classes = classNames({
    [styles[`mono__checkbox`]]: true,
    [className]: className,
    [styles[`notall`]] : halfCheck
  });

  return (
    <div className={classes}>
      <input type="checkbox" {...others} />
      {children}
    </div>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  halfCheck: PropTypes.bool
};

CheckBox.defaultProps = {
  halfCheck: false
};

export default CheckBox;