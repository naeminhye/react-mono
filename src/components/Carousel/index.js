/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";

// =========================
// Slide
// =========================

const CarouselItem = (props) => {
  const {
    className,
    itemRender,
    itemWidth,
    itemMargin,
    inactiveSlideScale,
    inactiveSlideOpacity,
    current,
    index,
  } = props;
  const carouselRef = useRef();

  useEffect(() => {
    carouselRef.current.style.setProperty("--item-width", itemWidth + "px");
    carouselRef.current.style.setProperty("--item-margin", itemMargin + "px");
    carouselRef.current.style.setProperty("--item-scale", inactiveSlideScale);
    carouselRef.current.style.setProperty(
      "--item-opacity",
      inactiveSlideOpacity
    );
  });

  const handleSlideClick = (event) => {
    props.handleSlideClick(index);
  };

  const itemClasses = classNames({
    [styles[`mono__carousel--item`]]: true,
    [className]: className,
    [styles["mono__carousel--item-current"]]: current === index,
    [styles["mono__carousel--item-previous"]]: current - 1 === index,
    [styles["mono__carousel--item-next"]]: current + 1 === index,
  });

  return (
    <li ref={carouselRef} className={itemClasses} onClick={handleSlideClick}>
      {itemRender(props.slide)}
    </li>
  );
};

// =========================
// Carousel control
// =========================

const CarouselControl = ({ type, handleClick }) => {
  return (
    <div className={styles[`control--${type}`]} onClick={handleClick}></div>
  );
};

const CarouselIndicators = (props) => {
  const { total, indicatorItem, onNavigate, activeIndex } = props;
  // activeIndex

  return (
    <div className={styles["mono__carousel--indicators"]}>
      {[...Array(total)].map((e, index) =>
        indicatorItem ? (
          <div
            onClick={() => {
              onNavigate(index);
            }}
          >
            {indicatorItem}
          </div>
        ) : (
          <div
            onClick={() => {
              onNavigate(index);
            }}
            className={classNames({
              [styles["mono__carousel--indicators-item"]]: true,
              [styles["active"]]: activeIndex === index,
            })}
          ></div>
        )
      )}
    </div>
  );
};

// =========================
// Carousel
// =========================

const Carousel = (props) => {
  const {
    slides,
    heading,
    itemRender,
    itemWidth,
    itemHeight,
    itemMargin,
    inactiveSlideScale,
    inactiveSlideOpacity,
    activeSlideAlignment,
    itemClassName,
    indicatorItem,
    autoplay,
    ...others
  } = props;
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const listRef = useRef(null);

  const handlePreviousClick = () => {
    const previous = current - 1;

    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
    // marginLeft: carouselRef.current && activeSlideAlignment === "center"
    //     ? (carouselRef.current.offsetWidth - (itemWidth + itemMargin * 2)) / 2
    //     : 0
  };
  useEffect(() => {
    const marginLeft =
      (activeSlideAlignment === "center"
        ? (carouselRef.current.offsetWidth - (itemWidth + itemMargin * 2)) / 2
        : 0) + "px";
    carouselRef.current.style.setProperty("--carousel-margin-left", marginLeft);
    // carouselRef.current.style.setProperty("height", '1000px');
    containerRef.current.style.setProperty(
      "--carousel-height",
      itemHeight + "px"
    );
    listRef.current.style.setProperty("--item-margin", itemMargin + "px");
  });

  return (
    <div ref={carouselRef} className={styles["mono__carousel"]}>
      <div ref={containerRef} className={styles["mono__carousel--container"]}>
        <ul
          ref={listRef}
          className={styles["mono__carousel--list"]}
          style={wrapperTransform}
        >
          {slides.map((slide, index) => {
            return (
              <CarouselItem
                key={index}
                className={itemClassName}
                index={index}
                slide={slide}
                current={current}
                handleSlideClick={handleSlideClick}
                // itemRender={itemRender}
                // itemWidth={itemWidth}
                // itemMargin={itemMargin}
                // inactiveSlideScale={inactiveSlideScale}
                // activeSlideAlignment={activeSlideAlignment}
                {...props}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles["mono__carousel--controls"]}>
        <CarouselControl type="previous" handleClick={handlePreviousClick} />

        <CarouselControl type="next" handleClick={handleNextClick} />
      </div>
      <CarouselIndicators
        activeIndex={current}
        total={slides.length}
        onNavigate={(index) => {
          if (current !== index) handleSlideClick(index);
        }}
        indicatorItem={indicatorItem}
      />
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  sliderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sliderHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  itemHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  itemRender: PropTypes.func.isRequired,
  itemMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  inactiveSlideScale: PropTypes.number,
  inactiveSlideOpacity: PropTypes.number,
  activeSlideAlignment: PropTypes.oneOf(["start", "center"]),
  itemClassName: PropTypes.string,
  indicatorItem: PropTypes.node,
};

Carousel.defaultProps = {
  direction: "horizontal",
  itemWidth: 500,
  itemHeight: 500,
  itemMargin: 20,
  inactiveSlideScale: 0.9,
  inactiveSlideOpacity: 0.7,
  activeSlideAlignment: "start",
};

export default Carousel;
