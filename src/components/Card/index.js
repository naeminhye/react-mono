import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Icons } from "../index";
import styles from "./Card.module.scss";

const Card = props => {
  const {
    children,
    className,
    bordered,
    footer,
    banner,
    bannerType,
    width,
    height,
    ...others
  } = props;

  const classes = classNames({
    [styles[`mono__card`]]: true,
    [className]: className,
    [styles.bordered]: bordered,
  });

  const wrapperStyle = {
    width: width ? width + "px" : "inherit",
    height: height ? height + "px" : "fit-content"
  };

  const [hoverTip, hideHoverTip] = useState(false);

  const videoRef = useRef(null);

  const handleMouseOver = () => {
    if(videoRef.current) {
      videoRef.current.play();
      hideHoverTip(true);
    }
  };
  const handleMouseOut = () => {
    if(videoRef.current) {
      videoRef.current.pause();
      hideHoverTip(false);
    }
  };

  useEffect(
    () => {
      // video hover event
      const video = videoRef.current;
      if (video) {
        video.addEventListener("mouseover", handleMouseOver);
        video.addEventListener("mouseout", handleMouseOut);

        return () => {
          video.removeEventListener("mouseover", handleMouseOver);
          video.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [videoRef.current] // Recall only if ref changes
  );

  return (
    <div className={classes} {...others} style={wrapperStyle}>
      <div className="mono__card--banner">
        {/* {banner} */}

        {bannerType === "video" && (
          <>
            <video
              ref={videoRef}
              className={styles["mono__card--banner-video"]}
              loop={banner.loop}
              // preload="none"
              autoPlay={banner.autoPlay}
              muted="muted"
            >
              <source src={banner.src} type={banner.type} />
            </video>
            {!hoverTip && (
              <div className={styles["mono__card--banner-tip"]}>
                <Icons.Video size={24} fill="#FFF" />
              </div>
            )}
          </>
        )}

        {bannerType === "image" && (
          <img 
          className={styles["mono__card--banner-image"]}
          src={banner.src} />
        )}

      </div>
      <div className={styles["mono__card--body"]}>{children}</div>
      {footer && <div className={styles["mono__card--footer"]}>{footer}</div>}
    </div>
  );
};

Card.defaultProps = {
  footerCollapse: false,
  bordered: false,
  bannerType: "image",
  banner: {
    // loop: true,
    type: "video/mp4"
  }
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  footerCollapse: PropTypes.bool,
  width: PropTypes.number,
  // height: PropTypes.number,
  bannerType: PropTypes.oneOf(["video", "image"]),
  // banner: PropTypes.objectOf(
  //   PropTypes.shape({
  //     loop: PropTypes.bool,
  //     src: PropTypes.string.isRequired,
  //     type: PropTypes.string
  //   })
  // )
};

export default Card;
