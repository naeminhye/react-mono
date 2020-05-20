import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

const LoadingRows = ({ rows, loading }) => {
  const classes = classNames({
    [styles['u-flex__cell']]: true,
    [styles['u-mg--sm']]: true,
    [styles['u-pd--sm']]: true,
    [styles['loading-animation']]: true,
  });

  const arr = Array.from(Array(rows), (_, index) => index + 1);
  return loading
    ? arr.map((i) => (
        <div className={styles['u-flex']}>
          <div className={classes}></div>
        </div>
      ))
    : null;
};
LoadingRows.propTypes = {
  rows: PropTypes.number,
};

LoadingRows.defaultProps = {
  rows: 1,
};

export default LoadingRows;
