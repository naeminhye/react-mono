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
    {
      size = 60,
      zoomRatio = 2,
      fill = 'none',
      stroke = '#000000',
      strokeWidth = 1,
      distorted = false,
      distortDuration = 0.4,
      type = 'circle', // 'circle' | 'rect' | 'custom'
      // This allows to customize the decorator
      renderCustomDecorator, // if type === 'custom'
    },
    ref
  ) => {
    const [, setCursor] = useContext(CursorContext);

    const viewBoxSize = useMemo(
      () =>
        size * (zoomRatio + 2) + strokeWidth * 2 + (distorted ? size / 2 : 0),
      [distorted, size, strokeWidth, zoomRatio]
    );

    const cursorRef = useRef(null);
    useEffect(() => {
      let _cursor = new Cursor({
        el: cursorRef?.current,
        size,
        zoomRatio,
        distortDuration,
      });
      setCursor(_cursor);
    }, [setCursor, size, zoomRatio, distortDuration]);

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
        {distorted && (
          <defs>
            <filter
              id="filter"
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
              <feOffset dx={-size / 2} result="warpOffset" />
              <feDisplacementMap
                xChannelSelector="R"
                yChannelSelector="G"
                scale={size / 2}
                in="SourceGraphic"
                in2="warpOffset"
              />
            </filter>
          </defs>
        )}
        {
          {
            circle: (
              <circle
                className="cursor__inner"
                cx={viewBoxSize / 2}
                cy={viewBoxSize / 2}
                r={size}
                style={{
                  fill,
                  stroke,
                  strokeWidth,
                }}
              />
            ),
            rect: (
              <rect
                className="cursor__inner"
                x={viewBoxSize / 2 - size}
                y={viewBoxSize / 2 - size}
                width={size * 2}
                height={size * 2}
                style={{
                  fill,
                  stroke,
                  strokeWidth,
                }}
              />
            ),
            custom:
              renderCustomDecorator &&
              renderCustomDecorator({
                className: 'cursor__inner',
                x: viewBoxSize / 2 - size,
                y: viewBoxSize / 2 - size,
                width: size * 2,
                height: size * 2,
              }),
          }[type]
        }
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
