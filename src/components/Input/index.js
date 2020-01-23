import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types'; 
import styles from './Input.module.scss'; 

const Input = props => {
  const { children, className, prefix, suffix, label, ...others } = props;

  const classes = classNames({
    [styles["mono__input"]]: true,
    [className]: className
  });

  return (
    <div className={styles["mono__input--wrapper"]}>
      <input className={classes} {...others} style={suffix && {paddingRight: 40}, prefix && {paddingLeft: 40}} />
      {prefix && <div className={styles["mono__input--prefix"]}>
        {prefix}
      </div>}
      {suffix && <div className={styles["mono__input--suffix"]}>
        {suffix}
      </div>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string, 
  onChange: PropTypes.func
}

Input.defaultProps = {
}

export default Input;
