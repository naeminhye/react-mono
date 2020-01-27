import React, { Children } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Tag.module.scss";
import {Icons} from "components";

const Tag = props => {
  const { className, children, closable, onClose, color, ...others } = props;

  const classes = classNames({
    [styles["mono__tag"]]: true,
    [className]: className,
  });

  return <div className={classes} {...others}>
      {children}
      {closable && <Icons.Close size={24} />}
    </div>;
};

Tag.defaultProps = {

}

Tag.propTypes = {
    color: PropTypes.string,
    closable: PropTypes.bool
}
export default Tag;
