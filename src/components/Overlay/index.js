import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Overlay = (props) => {
  const {
    className,
    panelClassName,
    dim,
    children,
    visible,
    hoverable,
    placement,
    content,
  } = props;

  const classes = classNames({
    [styles["mono__overlay"]]: true,
    [styles["mono__overlay--hoverable"]]: hoverable,
    [className]: className,
  });

  const panelClasses = classNames({
    [styles["mono__overlay--panel"]]: true,
    [styles["mono__overlay--panel-visible"]]: visible,
    [styles[`mono__overlay--panel-${placement}`]]: placement && placement !== "default",
    [panelClassName]: panelClassName,
  });

  return (
    <div className={classes}>
      {children}
      <div
        className={panelClasses}
        style={{ background: `rgba(0,0,0,${dim})` }}
      >{content}</div>
    </div>
  );
};

Overlay.defaultProps = {
  dim: 0,
  placement: "default",
  visible: false
};

Overlay.propTypes = {
  /** Class Name of the Container */
  className: PropTypes.string,
  panelClassName: PropTypes.string,
  /** Whether the overlay foreground is shown or not */
  visible: PropTypes.bool,
  hoverable: PropTypes.bool,
  /** from 0 to 1 */
  dim: PropTypes.number,
  placement: PropTypes.oneOf(["default", "top", "left", "bottom", "right"]),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};
export default Overlay;
