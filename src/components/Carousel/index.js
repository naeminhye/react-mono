import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";

// =========================
// Slide
// =========================

const CarouselItem = props => {
  const {
    className,
    itemRender,
    itemWidth,
    itemMargin,
    inactiveSlideScale,
    current,
    index
  } = props;
  const carouselRef = useRef();

  useEffect(() => {
    carouselRef.current.style.setProperty("--item-width", itemWidth + "px");
    carouselRef.current.style.setProperty("--item-margin", itemMargin + "px");
    carouselRef.current.style.setProperty("--item-scale", inactiveSlideScale);
  });

  const handleSlideClick = event => {
    props.handleSlideClick(index);
  };

  const itemClasses = classNames({
    [styles[`mono__carousel--item`]]: true,
    [className]: className,
    [styles["mono__carousel--item-current"]]: current === index,
    [styles["mono__carousel--item-previous"]]: current - 1 === index,
    [styles["mono__carousel--item-next"]]: current + 1 === index
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

const CarouselIndicators = props => {
  const { total, indicatorItem, onNavigate, activeIndex } = props;
  // activeIndex

  return(
    <div className={styles["mono__carousel--indicators"]}>
      {[...Array(total)].map((e, index) =>  (
        indicatorItem ? <div onClick={() => {onNavigate(index)}}>{indicatorItem}</div> : <div onClick={() => {
          onNavigate(index)
        }} className={classNames({
          [styles["mono__carousel--indicators-item"]]: true,
          [styles["active"]]: activeIndex === index
        })}></div>
      ))}
    </div>
  )
}

// =========================
// Carousel
// =========================

const Carousel = props => {
  const {
    slides,
    heading,
    itemRender,
    itemWidth,
    itemMargin,
    inactiveSlideScale,
    activeSlideAlignment,
    itemClassName,
    indicatorItem,
    ...others
  } = props;
  const [current, setCurrent] = useState(0);
  const listRef = useRef(null);

  const handlePreviousClick = () => {
    const previous = current - 1;

    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = index => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
    marginLeft:
      listRef.current && activeSlideAlignment === "center"
        ? (listRef.current.offsetWidth - (itemWidth + itemMargin * 2)) / 2
        : 0
  };

  return (
    <div className={styles["mono__carousel"]}>
      <div ref={listRef} className={styles["mono__carousel--container"]}>
        <ul className={styles["mono__carousel--list"]} style={wrapperTransform}>
          {slides.map((slide, index) => {
            return (
              <CarouselItem
                key={index}
                className={itemClassName}
                index={index}
                slide={slide}
                current={current}
                handleSlideClick={handleSlideClick}
                itemRender={itemRender}
                itemWidth={itemWidth}
                itemMargin={itemMargin}
                inactiveSlideScale={inactiveSlideScale}
                activeSlideAlignment={activeSlideAlignment}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles["mono__carousel--controls"]}>
        <CarouselControl
          type="previous"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          handleClick={handleNextClick}
        />
      </div>
      <CarouselIndicators
        activeIndex={current}
        total={slides.length} 
        onNavigate={(index) => {
          if(current !== index)
            handleSlideClick(index);
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
  itemWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemRender: PropTypes.func.isRequired,
  itemMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  inactiveSlideScale: PropTypes.number,
  activeSlideAlignment: PropTypes.oneOf(["start", "center"]),
  itemClassName: PropTypes.string,
  indicatorItem: PropTypes.node
};

Carousel.defaultProps = {
  direction: "horizontal",
  itemWidth: 500,
  itemMargin: 20,
  inactiveSlideScale: 0.9,
  activeSlideAlignment: "start"
};

export default Carousel;
