import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const __name__ = (props) => {
  const { className } = props;

  const classes = classNames({
    [styles[`mono____name__(kebabCase)`]]: true,
    [className]: className,
  });

  return <div className={classes}></div>;
};

__name__.propTypes = {
  className: PropTypes.string,
};

export default __name__;
