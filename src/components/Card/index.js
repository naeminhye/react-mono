import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 

const Card = props => {
  const { children, className, title, width,...others } = props;

  const classes = classNames({
    card__box: true,
    [className]: className || ""
  });

  return (
    <div className={classes} {...others} style={width ? { width: width } : {}}>
      <div className="card__box__title">{title}</div>
      <div className="card__box__content">{children}</div>
    </div>
  );
};

Card.defaultProps = {
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string
}

export default Card;
