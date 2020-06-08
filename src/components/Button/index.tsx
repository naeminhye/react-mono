import * as React from 'react';
import classNames from 'classnames';

import IconButton from './IconButton';

import styles from './styles.module.scss';

export interface ButtonProps {
  className?: string;
  children?: string;
  shape?: 'default' | 'round';
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    size = 'md',
    shape = 'default',
    className = '',
    type = 'default',
    disabled = false,
    ...others
  } = props;

  const classes = classNames({
    [styles.mono__btn]: true,
    [className]: className,
    [styles[`mono__btn--type-${type}`]]: type && type !== 'default',
    [styles[`mono__btn--size-${size}`]]: size && size !== 'md',
    [styles[`mono__btn--disabled`]]: disabled,
    [styles[`mono__btn--shape-${shape}`]]: shape && shape !== 'default',
  });

  return (
    <button className={classes} disabled={disabled} {...others}>
      <div className={styles.mono__btn__content}>{children}</div>
    </button>
  );
};

Button.IconButton = IconButton;

export default Button;
