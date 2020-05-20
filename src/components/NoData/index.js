import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Icons from '../Icons';

const NoData = (props) => {
  const { className, text } = props;

  const classes = classNames({
    [styles[`mono__no-data`]]: true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <Icons.No fill="#aeaeae" />
      <span className={styles['mono__no-data--text']}>{text}</span>
    </div>
  );
};

NoData.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

NoData.defaultProps = {
  text: 'No Data',
};

export default NoData;
