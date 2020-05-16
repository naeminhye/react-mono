import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Editor as DraftEditor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
} from 'draft-js';
import Controls from './Controls';

import styles from './styles.module.scss';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: ' “ ” ', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'A', style: 'atomic' },
  { label: '{ }', style: 'code-block' },
];

const INLINE_STYLES = [
  { label: 'B', style: 'BOLD' },
  { label: 'I', style: 'ITALIC' },
  { label: 'U', style: 'UNDERLINE' },
  { label: 'm', style: 'CODE' },
  { label: 'S', style: 'STRIKETHROUGH' },
];

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: '4px 8px',
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through',
  },
};

function keyBindingFunction(event) {
  // customize keyboard shortcut

  return getDefaultKeyBinding(event);
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return [styles.blockquote];
    default:
      return null;
  }
}

const Editor = (props) => {
  const { className, placeholder, roundCornered, ...others } = props;
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const editorRef = React.useRef(null);

  function focusEditor() {
    editorRef.current.focus();
  }

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onTab = (e) => {
    const maxDepth = 4;
    setEditorState(RichUtils.onTab(e, editorState, maxDepth));
  };

  function toggleBlockType(blockType) {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  }

  function toggleInlineStyle(inlineStyle) {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  }

  const classes = classNames({
    [styles[`mono__editor`]]: true,
    [styles.hidePlaceholder]:
      !editorState.getCurrentContent().hasText() &&
      editorState.getCurrentContent().getBlockMap().first().getType() !==
        'unstyled',
    [styles.roundCornered]: roundCornered,
    [className]: className,
  });

  return (
    <div className={styles['mono__editor--wrapper']}>
      <div className={styles['mono__editor--controls']}>
        <Controls
          types={BLOCK_TYPES}
          editorState={editorState}
          onToggle={toggleBlockType}
        />
        <Controls
          types={INLINE_STYLES}
          editorState={editorState}
          onToggle={toggleInlineStyle}
        />
      </div>
      <div className={classes} onClick={focusEditor}>
        <DraftEditor
          ref={editorRef}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          onTab={onTab}
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          spellCheck={true}
          placeholder={placeholder}
          keyBindingFn={keyBindingFunction}
          {...others}
        />
      </div>
    </div>
  );
};

Editor.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  roundCornered: PropTypes.bool,
};

export default Editor;
