import React from 'react';
import classNames from 'classnames';

import styles from '../styles.module.scss';

const Control = (props) => {
  const onToggle = (e) => {
    e.preventDefault();
    props.onToggle(props.style);
  };
  const classes = classNames({
    [styles.control]: true,
    [styles.active]: props.active,
  });
  return (
    <span className={classes} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
};

const Controls = (props) => {
  const { editorState, types } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div>
      {types.map((type) => (
        <Control
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

export default Controls;
