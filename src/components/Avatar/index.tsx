import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

export interface AvatarProps {
  className?: string;
  children?: string;
  alt?: string;
  style?: object;
  src: string;
  shape?: 'circle' | 'square';
  size?: number | 'xs' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
  borderStyle?: {
    border: string;
    borderStyle:
      | 'dotted'
      | 'dashed'
      | 'solid'
      | 'double'
      | 'groove'
      | 'ridge'
      | 'inset'
      | 'outset';
  };
  borderWidth: string;
  borderColor: string;
}

const Avatar = (props: AvatarProps) => {
  const {
    className = '',
    size = 'md',
    src,
    shape = 'circle',
    alt = '',
    style,
    bordered = false,
    borderStyle,
  } = props;

  const classes = classNames({
    [styles.mono__avatar]: true,
    [className]: className || '',
    [styles[`mono__avatar--${size}`]]:
      size && typeof size === 'string' && size !== 'md',
    [styles[`mono__avatar--${shape}`]]: shape && shape !== 'circle',
    [styles.bordered]: bordered,
  });

  let imageStyles: object = {
    width: typeof size === 'number' && size + 'px',
    height: typeof size === 'number' && size + 'px',
    lineHeight: typeof size === 'number' && size + 'px',

    ...style,
  };

  if (bordered && borderStyle) {
    Object.assign(imageStyles, { ...borderStyle });
  }

  return (
    <span className={classes} style={imageStyles}>
      {src && (
        <img className={styles[`mono__avatar--image`]} src={src} alt={alt} />
      )}
    </span>
  );
};

export default Avatar;
