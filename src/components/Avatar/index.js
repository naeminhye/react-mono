import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Avatar = (props) => {
  const { className, size, src, shape, alt, style, bordered, borderStyle } = props;

  const classes = classNames({
    [styles.mono__avatar]: true,
    [className]: className || "",
    [styles[`mono__avatar--${size}`]]: size && (typeof size === 'string') && size !== "md",
    [styles[`mono__avatar--${shape}`]]: shape && shape !== "circle",
    [styles[`mono__avatar--bordered`]]: bordered
  });

  let imageStyles = {
    width: (typeof size === 'number') && (size + "px"),
    height: (typeof size === 'number') && (size + "px"),
    lineHeight: (typeof size === 'number') && (size + "px"),

    ...style,
  };

  if(bordered && borderStyle) {
    Object.assign(imageStyles, {...borderStyle})
  }

  return (
    <span className={classes} style={imageStyles}>
      {src && (
        <img className={styles[`mono__avatar--image`]} src={src} alt={alt} />
      )}
    </span>
  );
};

Avatar.defaultProps = {
  shape: "circle",
  size: "md"
};

Avatar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  shape: PropTypes.oneOf([
    "circle", "square"
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["xs", "sm", "md", "lg"])]),
  bordered: PropTypes.bool,
  borderStyle: PropTypes.shape({
      border: PropTypes.string,
      borderStyle: PropTypes.oneOf(["dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"]),
      borderWidth: PropTypes.string,
      borderColor: PropTypes.string,
  }),
};

export default Avatar;
