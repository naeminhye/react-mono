import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Card.scss";
import { Icons } from "../index";
// import styles from "./Card.module.scss";

const Card = props => {
  const {
    children,
    className,
    bordered,
    footer,
    banner,
    bannerType,
    width,
    ...others
  } = props;

  const classes = classNames({
    mono__card: true,
    [className]: className,
    bordered: bordered
  });

  const wrapperStyle = {
    maxWidth: width ? width + "px" : "100%"
  };

  const [hoverTip, hideHoverTip] = useState(false);

  const videoRef = useRef(null);

  const handleMouseOver = () => {
    videoRef.current.play();
    hideHoverTip(true);
  };
  const handleMouseOut = () => {
    videoRef.current.pause();
    hideHoverTip(false);
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
              className="mono__card--banner-video"
              // loop={banner.loop}
              // preload="none"
              // autoPlay={banner.autoPlay}
            >
              <source src={banner.src} type={banner.type} />
            </video>
            {!hoverTip && (
              <div className="mono__card--banner-tip">
                <Icons.Video size={24} fill="#FFF" />
              </div>
            )}
          </>
        )}

        {bannerType === "image" && (
          <img 
          className="mono__card--banner-image"
          src="https://cnet1.cbsistatic.com/img/firxUCBYK8N9MRR3MP5jwD6JcOc=/756x567/2019/04/12/f9483088-44fa-4c9a-9a4a-e754f07546b6/screen-shot-2019-04-11-at-4-56-46-pm.png" />
        )}

      </div>
      <div className="mono__card--body">{children}</div>
      {footer && <div className="mono__card--footer">{footer}</div>}
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
  bannerType: PropTypes.oneOf(["video", "image"]),
  banner: PropTypes.objectOf(
    PropTypes.shape({
      loop: PropTypes.bool,
      src: PropTypes.string.isRequired,
      type: PropTypes.string
    })
  )
};

export default Card;
