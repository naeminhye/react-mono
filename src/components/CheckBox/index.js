import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./CheckBox.module.scss";

const CheckBox = props => {
  const {
    children,
    className,
    ...others
  } = props;

  const classes = classNames({
    [styles[`mono__checkbox`]]: true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <input type="checkbox" {...others} />
      {children}
    </div>
  );
};

export default CheckBox;