import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../styles.module.scss';

const Input = (props) => {
  const {
    children,
    className,
    prefix,
    suffix,
    label,
    bordered,
    disabled,
    ...others
  } = props;

  const classes = classNames({
    [styles['mono__input']]: true,
    [className]: className,
    [styles.bordered]: bordered,
    [styles['mono__input--disabled']]: disabled,
  });

  return (
    <div className={styles['mono__input--wrapper']}>
      <input
        disabled={disabled}
        className={classes}
        {...others}
        style={(suffix && { paddingRight: 40 }, prefix && { paddingLeft: 40 })}
      />
      {prefix && <div className={styles['mono__input--prefix']}>{prefix}</div>}
      {suffix && <div className={styles['mono__input--suffix']}>{suffix}</div>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  bordered: PropTypes.bool,
  //TODO: add allowClear prop
  allowClear: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  bordered: false,
  disabled: false,
};

export default Input;
