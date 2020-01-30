import React, { useState, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./Carousel.module.scss";

// =========================
// Slide
// =========================

const CarouselItem = props => {
  const { itemRender, current, index } = props;
  const carouselRef = useRef();

  const handleMouseMove = event => {
    const el = carouselRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = event => {
    carouselRef.current.style.setProperty("--x", 0);
    carouselRef.current.style.setProperty("--y", 0);
  };

  const handleSlideClick = event => {
    props.handleSlideClick(index);
  };

  const itemClasses = classNames({
    [styles[`mono__carousel--item`]]: true,
    // [className]: className,
    [styles["mono__carousel--item-current"]]: current === index,
    [styles["mono__carousel--item-previous"]]: current - 1 === index,
    [styles["mono__carousel--item-next"]]: current + 1 === index
  });

  return (
    <li
      ref={carouselRef}
      className={itemClasses}
      onClick={handleSlideClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {itemRender ? itemRender(props.slide) : <div></div>}
    </li>
  );
};

// =========================
// Carousel control
// =========================

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  );
};

// =========================
// Carousel
// =========================

const Carousel = props => {
  const { slides, heading, itemRender } = props;
  const [current, setCurrent] = useState(0);

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

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`
  };

  return (
    <div className={styles["mono__carousel"]}>
      <div
        className={styles["mono__carousel--container"]}
        aria-labelledby={headingId}
      >
        <ul className={styles["mono__carousel--list"]} style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhidden">
            {heading}
          </h3>

          {slides.map((slide, index) => {
            return (
              <CarouselItem
                key={index}
                index={index}
                slide={slide}
                current={current}
                handleSlideClick={handleSlideClick}
                itemRender={itemRender}
              />
            );
          })}
        </ul>
      </div>
      <div className={styles["mono__carousel--controls"]}>
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  itemRender: PropTypes.func.isRequired
};

Carousel.defaultProps = {
  direction: "horizontal"
};

export default Carousel;
