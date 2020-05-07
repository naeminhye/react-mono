import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Button } from "../index";
import styles from "./styles.module.scss";

const TRIGGER_TYPES = {
  BUTTON: "button",
  CLICK: "click",
  HOVER: "hover",
};

const FlipCard = (props) => {
  const {
    onFlip,
    className,
    style,
    width,
    height,
    front,
    back,
    trigger,
    frontButton,
    backButton,
    ...others
  } = props;

  const [flipped, setFlipped] = useState(false);

  const classes = classNames({
    [styles["mono__flip-card"]]: true,
    [className]: className,
    [styles["mono__flip-card--button"]]: trigger === TRIGGER_TYPES.BUTTON,
    [styles["mono__flip-card--hover"]]: trigger === TRIGGER_TYPES.HOVER,
  });

  return (
    <div
      className={classes}
      {...others}
      onClick={() => {
        if (trigger === TRIGGER_TYPES.CLICK) {
          setFlipped(!flipped);
        }
      }}
      style={{ width: width, height: height, ...style }}
    >
      <input
        type="checkbox"
        className={styles["mono__flip-card--input"]}
        aria-hidden="true"
        checked={flipped}
        onChange={() => {
          if (onFlip) onFlip();
        }}
      />
      <div className={styles["mono__flip-card--content"]}>
        <div className={styles["front"]}>
          <div className={styles["inner"]}>
            {front}
            {trigger === TRIGGER_TYPES.BUTTON && frontButton && (
              <Button
                onClick={() => {
                  setFlipped(!flipped);
                }}
              >
                {frontButton}
              </Button>
            )}
          </div>
        </div>
        <div className={styles["back"]}>
          <div className={styles["inner"]}>
            {back}
            {trigger === TRIGGER_TYPES.BUTTON && backButton && (
              <Button
                onClick={() => {
                  setFlipped(!flipped);
                }}
              >
                {backButton}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

FlipCard.defaultProps = {
  frontButton: "Details",
  backButton: "Back",
  width: "360px",
  height: "240px",
  trigger: TRIGGER_TYPES.CLICK,
};

FlipCard.propTypes = {
  className: PropTypes.string,
  front: PropTypes.node,
  back: PropTypes.node,
  clickable: PropTypes.bool,
  frontButton: PropTypes.string,
  backButton: PropTypes.string,
  trigger: PropTypes.oneOf([
    TRIGGER_TYPES.CLICK,
    TRIGGER_TYPES.HOVER,
    TRIGGER_TYPES.BUTTON,
  ]),
  onFlip: PropTypes.func,
};

export default FlipCard;
