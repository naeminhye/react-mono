import React, { useRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Icons } from '../index';
import styles from './styles.module.scss';

export interface CardProps {
  className?: string;
  children?: React.ReactChildren;
  footer?: boolean | React.ReactElement | React.ReactNode;
  footerCollapse?: boolean;
  width?: number;
  height?: number;
  bordered?: boolean;
  banner?: {
    type: 'video' | 'image';
    // Media Attributes
    src?: string;
    // For video only
    autoPlay?: boolean;
    controls?: boolean;
    controlsList?: string;
    crossOrigin?: string;
    loop?: boolean;
    mediaGroup?: string;
    muted?: boolean;
    playsInline?: boolean;
    preload?: string;
    sourceType?: string;
    // For image only
    alt?: string;
  };
  sourceImg?: string;
}

const Card = (props: CardProps) => {
  const {
    children,
    className = '',
    bordered = false,
    footer = false,
    banner,
    width,
    height,
    sourceImg,
    ...others
  } = props;

  const classes = classNames({
    [styles[`mono__card`]]: true,
    [className]: className,
    [styles.bordered]: bordered,
  });

  const wrapperStyle = {
    width: width ? width + 'px' : 'inherit',
    height: height ? height + 'px' : 'fit-content',
  };

  const [hoverTip, hideHoverTip] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseOver = () => {
    if (videoRef.current) {
      videoRef.current.play();
      hideHoverTip(true);
    }
  };
  const handleMouseOut = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      hideHoverTip(false);
    }
  };

  useEffect(
    (): any => {
      // video hover event
      const video = videoRef.current;
      if (video) {
        video.addEventListener('mouseover', handleMouseOver);
        video.addEventListener('mouseout', handleMouseOut);

        return (): void => {
          video.removeEventListener('mouseover', handleMouseOver);
          video.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [videoRef.current] // Recall only if ref changes
  );

  return (
    <div className={classes} {...others} style={wrapperStyle}>
      {banner && (
        <div className="mono__card--banner">
          {/* {banner} */}

          {banner.type === 'video' && (
            <>
              <video
                {...banner}
                ref={videoRef}
                className={styles['mono__card--banner-video']}
                loop={banner.loop}
              >
                <source src={banner.src} type={banner.sourceType} />
              </video>
              {!hoverTip && (
                <div className={styles['mono__card--banner-tip']}>
                  <Icons.Video size={24} fill="#FFF" />
                </div>
              )}
            </>
          )}

          {banner.type === 'image' && (
            <img
              alt={banner.alt}
              className={styles['mono__card--banner-image']}
              src={banner.src}
            />
          )}
        </div>
      )}
      <div className={styles['mono__card--body']}>
        {children}
        {sourceImg && (
          <div
            className={styles['mono__card--source-wrapper']}
            style={{ backgroundImage: `url('${sourceImg}')` }}
          ></div>
        )}
      </div>
      {footer && <div className={styles['mono__card--footer']}>{footer}</div>}
    </div>
  );
};

export default Card;
