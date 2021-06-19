import React, {
  useEffect,
  useContext,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react';
import { CursorContext } from '../Provider';
import Cursor from './cursor';
import './styles.css';

const isTouchDevice =
  'ontouchstart' in window ||
  navigator.MaxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

const CursorDecorator = forwardRef(
  (
    { feTurbulence = false, radius = 60, zoomRatio = 2, strokeWidth = 1 },
    ref
  ) => {
    const [, setCursor] = useContext(CursorContext);

    const viewBoxSize = useMemo(
      () => radius * (zoomRatio + 2) + strokeWidth * 2,
      [radius, strokeWidth, zoomRatio]
    );

    const cursorRef = useRef(null);
    useEffect(() => {
      let _cursor = new Cursor({ el: cursorRef?.current, radius, zoomRatio });
      setCursor(_cursor);
    }, [setCursor, radius, zoomRatio]);

    useImperativeHandle(
      ref,
      () => ({
        ...cursorRef.current,
      }),
      []
    );

    if (isTouchDevice) {
      return null;
    }
    return (
      <svg
        ref={cursorRef}
        className="cursor"
        width={viewBoxSize}
        height={viewBoxSize}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        {feTurbulence && (
          <defs>
            <filter
              id="filter-1"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0"
                numOctaves="1"
                result="warp"
              />
              <feOffset dx={-radius / 2} result="warpOffset" />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale={radius / 2}
                in="SourceGraphic"
                in2="warpOffset"
              />
            </filter>
          </defs>
        )}
        <circle
          className="cursor__inner"
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          r={radius}
          style={{
            strokeWidth,
          }}
        />
      </svg>
    );
  }
);

export const useCursorHandlers = (options = {}) => {
  const [cursor] = useContext(CursorContext);

  const onMouseEnter = useCallback(
    (event) => {
      if (options.onMouseEnter) {
        options.onMouseEnter(event);
      }
      cursor && cursor.enter();
    },
    [cursor, options]
  );

  const onMouseLeave = useCallback(
    (event) => {
      if (options.onMouseLeave) {
        options.onMouseLeave(event);
      }
      cursor && cursor.leave();
    },
    [cursor, options]
  );

  if (isTouchDevice) {
    return options;
  }
  return { onMouseEnter, onMouseLeave };
};

export default CursorDecorator;
