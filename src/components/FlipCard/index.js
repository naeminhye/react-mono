import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Button } from "components";
import styles from './FlipCard.module.scss'; 

const FlipCard = props => {
  const { className, width, height, front, back, clickable, frontButton, backButton, ...others } = props;

  const [flipped, setFlipped] = useState(false);

  const classes = classNames({
    [styles["mono__flip-card"]]: true,
    [className]: className
  });

  return (
    <div
      className={classes}
      {...others}
      onClick={() => {
        if (clickable) {
          setFlipped(!flipped);
        }
      }}
      style={{ width: width, height: height }}
    >
      <input
        type="checkbox"
        className={styles["mono__flip-card--input"]}
        aria-hidden="true"
        checked={flipped}
        onChange={() => {
          console.log("on flip");
        }}
      />
      <div className={styles["mono__flip-card--content"]}>
        <div className={styles["front"]}>
          <div className={styles["inner"]}>
            {front}
            {!clickable && frontButton && <Button
              onClick={() => {
                setFlipped(true);
              }}
            >
              {frontButton}
            </Button>}
          </div>
        </div>
        <div className={styles["back"]}>
          <div className={styles["inner"]}>
            {back}
            {!clickable && backButton && <Button
              onClick={() => {
                setFlipped(false);
              }}
            >
              {backButton}
            </Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

FlipCard.defaultProps = {
    clickable: false,
    frontButton: "Details",
    backButton: "Back",
    width: "360px",
    height: "240px"
};

FlipCard.propTypes = {
  className: PropTypes.string,
  front: PropTypes.node,
  back: PropTypes.node,
  clickable: PropTypes.bool,
  frontButton: PropTypes.string,
  backButton: PropTypes.string
};

export default FlipCard;
