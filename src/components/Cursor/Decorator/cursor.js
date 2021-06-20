/**
 * Reference: https://github.com/codrops/AnimatedCustomCursor
 */
import { gsap } from 'gsap';
import { EventEmitter } from 'events';
import { lerp, getMousePos } from '../utils';

// Track the mouse position
let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', (ev) => (mouse = getMousePos(ev)));

export default class Cursor extends EventEmitter {
  constructor(props) {
    super();
    const { size, zoomRatio, distortDuration, el } = props;
    this.DOM = { size, zoomRatio, distortDuration, el };
    this.DOM.el.style.opacity = 0;
    this.DOM.circleInner = this.DOM.el.querySelector('.cursor__inner');
    this.filterId = '#filter';
    this.DOM.feTurbulence = document.querySelector('feTurbulence');

    this.primitiveValues = { turbulence: 0 };

    this.createTimeline();

    this.bounds = this.DOM.el.getBoundingClientRect();

    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.2 },
      ty: { previous: 0, current: 0, amt: 0.2 },
      radius: { previous: this.DOM.size, current: this.DOM.size, amt: 0.2 },
    };

    this.listen();

    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
        mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.current =
        mouse.y - this.bounds.height / 2;
      gsap.to(this.DOM.el, {
        duration: 0.9,
        ease: 'Power3.easeOut',
        opacity: 1,
      });
      requestAnimationFrame(() => this.render());
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };
    window.addEventListener('mousemove', this.onMouseMoveEv);
  }
  render() {
    this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      );
    }

    this.DOM.el.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px)`;
    this.DOM.circleInner.setAttribute(
      'r',
      this.renderedStyles['radius'].previous
    );

    requestAnimationFrame(() => this.render());
  }
  createTimeline() {
    // init timeline
    if (this.DOM.feTurbulence) {
      this.tl = gsap
        .timeline({
          paused: true,
          onStart: () => {
            this.DOM.circleInner.style.filter = `url(${this.filterId}`;
          },
          onUpdate: () => {
            this.DOM.feTurbulence.setAttribute(
              'baseFrequency',
              this.primitiveValues.turbulence
            );
          },
          onComplete: () => {
            this.DOM.circleInner.style.filter = 'none';
          },
        })
        .to(this.primitiveValues, {
          duration: this.DOM.distortDuration,
          startAt: { turbulence: 0.09 },
          turbulence: 0,
        });
    }
  }
  enter() {
    this.renderedStyles['radius'].current = this.DOM.size * this.DOM.zoomRatio;
    this.tl && this.tl.restart();
  }
  leave() {
    this.renderedStyles['radius'].current = this.DOM.size;
    this.tl && this.tl.progress(1).kill();
  }
  listen() {
    this.on('enter', () => this.enter());
    this.on('leave', () => this.leave());
  }
}
