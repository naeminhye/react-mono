import React from 'react';
import classNames from 'classnames';
import styles from '../styles.module.scss';
import Button from '../index';

export interface IconButtonProps {
  shape?: 'circle' | 'round' | 'square';
  className?: string;
  children?: string;
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const IconButton = ({
  className = '',
  size = 'md',
  shape = 'square',
  children,
  ...others
}: IconButtonProps) => {
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
