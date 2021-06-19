import React from 'react';

import { Cursor } from 'components';
const { CursorProvider, useCursorHandlers, CursorDecorator } = Cursor;

const Hover = (props) => {
  const { onMouseEnter, onMouseLeave } = useCursorHandlers();

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>
      THE CURSOR'S DECORATOR WILL BE SCALED UP
    </div>
  );
};

const CursorExample = () => {
  return (
    <CursorProvider>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Hover
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#80B362',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF7377',
          }}
        >
          NORMAL TEXT
        </div>
        <CursorDecorator feTurbulence radius={50} />
      </div>
    </CursorProvider>
  );
};

export default CursorExample;
