import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Cleave from 'cleave.js/react';

import Input from '../default';
import styles from '../styles.module.scss';

/** Cleave lib support: https://github.com/nosir/cleave.js */
const Number = (props) => {
  const {
    cleave,
    cleaveOptions,
    bordered,
    disabled,
    className,
    ...others
  } = props;

  const classes = classNames({
    [styles['mono__input']]: true,
    [className]: className,
    [styles.bordered]: bordered,
    [styles['mono__input--disabled']]: disabled,
  });

  return cleave ? (
    <div className={styles['mono__input--wrapper']}>
      <Cleave
        disabled={disabled}
        className={classes}
        options={cleaveOptions}
        {...others}
      />
    </div>
  ) : (
    <Input {...props} type="number" />
  );
};

Number.propTypes = {
  cleave: PropTypes.bool,
  /** https://github.com/nosir/cleave.js/blob/master/doc/options.md */
  cleaveOptions: PropTypes.object,
};

Number.defaultProps = {
  type: 'default',
};

export default Number;
