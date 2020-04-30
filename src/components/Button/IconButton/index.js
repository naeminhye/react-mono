import React from "react";
import classNames from "classnames";
import styles from "../styles.module.scss";
import Icons from "components/Icons";
import Button from "../index";

const IconButton = (props) => {
  const { className, size, shape, ...others } = props;

  const classes = classNames({
    [styles[`mono__icon-btn`]]: true,
    [className]: className,
    [styles[`mono__icon-btn--shape-${shape}`]]: shape !== "square", // circle, round, square
  });

  return (
    <Button className={classes} {...others}>
      <Icons.ArrowDown size={18} fill="#FFFFFF" />
    </Button>
  );
};

export default IconButton;
