import React, { createContext, useState, useEffect } from 'react';

export const CursorContext = createContext({ active: false });

const CursorProvider = ({ children, hideCursor = false }) => {
  const [cursor, setCursor] = useState(null);

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      <div style={hideCursor ? { cursor: 'none' } : {}}>{children}</div>
    </CursorContext.Provider>
  );
};

export const useMousePosition = () => {
  const [position, setPosition] = useState({
    clientX: 0,
    clientY: 0,
  });

  const updatePosition = (event) => {
    const { clientX, clientY } = event;

    setPosition({
      clientX,
      clientY,
    });
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', updatePosition, false);
    document.body.addEventListener('mouseenter', updatePosition, false);

    return () => {
      document.body.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseenter', updatePosition);
    };
  }, []);

  return position;
};

export default CursorProvider;
