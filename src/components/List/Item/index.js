import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../styles.module.scss';

const Item = (props) => {
  const { children } = props;

  const classes = classNames({
    [styles[`mono__list--item`]]: true,
  });

  return <li className={classes}>{children}</li>;
};

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Item;
