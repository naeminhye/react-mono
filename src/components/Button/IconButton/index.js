import React from 'react';
import classNames from 'classnames';
import styles from '../styles.module.scss';
import Button from '../index';

const IconButton = (props) => {
  const { className, size, shape, children, ...others } = props;

  const classes = classNames({
    [styles[`mono__icon-btn`]]: true,
    [className]: className,
    [styles[`mono__icon-btn--size-${size}`]]: size && size !== 'md',
    [styles[`mono__icon-btn--shape-${shape}`]]: shape && shape !== 'square', // circle, round, square
  });

  return (
    <Button className={classes} {...others}>
      {children}
    </Button>
  );
};

export default IconButton;
