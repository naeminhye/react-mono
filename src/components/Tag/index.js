import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Tag.module.scss";
import { Icons } from "../index";

const Tag = (props) => {
  const {
    className,
    children,
    closable,
    onClose,
    color,
    bordered,
    type,
    size,
    shape,
    ...others
  } = props;

  const classes = classNames({
    [styles["mono__tag"]]: true,
    [className]: className,
    [styles["mono__tag--bordered"]]: bordered,
    [styles[`mono__tag--${shape}`]]: shape && shape !== "default",
  });

  return (
    <div className={classes} {...others}>
      <span style={{ fontSize: size }}>{children}</span>
      {closable && (
        <span className={styles["mono__tag--closable"]}>
          <Icons.Close size={size} />
        </span>
      )}
    </div>
  );
};

Tag.defaultProps = {
  closable: false,
  bordered: false,
  shape: "default",
  size: 16,
};

Tag.propTypes = {
  color: PropTypes.string,
  closable: PropTypes.bool,
  bordered: PropTypes.bool,
  shape: PropTypes.oneOf(["default", "round"]),
  size: PropTypes.number,
  children: PropTypes.string,
};
export default Tag;
