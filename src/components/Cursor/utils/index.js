// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const calcWinsize = () => {
  return { width: window.innerWidth, height: window.innerHeight };
};

// Gets the mouse position
const getMousePos = (e) => {
  return {
    x: e.clientX,
    y: e.clientY,
  };
};

const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.hypot(a, b);
};

// Generate a random float.
const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(2);

const wrapElements = (elems, wrapType, wrapClass) => {
  elems.forEach((char) => {
    // add a wrap for every char (overflow hidden)
    const wrapEl = document.createElement(wrapType);
    wrapEl.classList = wrapClass;
    char.parentNode.appendChild(wrapEl);
    wrapEl.appendChild(char);
  });
};

const lineEq = (y2, y1, x2, x1, currentVal) => {
  // y = mx + b
  var m = (y2 - y1) / (x2 - x1),
    b = y1 - m * x1;
  return m * currentVal + b;
};
export {
  lerp,
  calcWinsize,
  getMousePos,
  distance,
  getRandomFloat,
  wrapElements,
  lineEq,
};
