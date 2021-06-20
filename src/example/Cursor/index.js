import React from 'react';

// https://www.flaticon.com/free-icon/cherry-blossom_1762755
import { ReactComponent as CherryBlossom } from './cherry-blossom.svg';

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
    <CursorProvider hideCursor>
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
        <CursorDecorator
          size={16}
          // distorted
          // distortDuration={1}
          // type="circle"
          // fill="none"
          // stroke="red"
          type="custom"
          renderCustomDecorator={(props) => <CherryBlossom {...props} />}
        />
      </div>
    </CursorProvider>
  );
};

export default CursorExample;
