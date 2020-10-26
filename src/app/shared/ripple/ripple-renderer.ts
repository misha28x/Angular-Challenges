import { ElementRef, NgZone } from '@angular/core';
import { RippleConfig } from './types/ripple.config';
import { RippleRef } from './ripple-ref';

const supportedEvents = ['mousedown', 'mouseup'];

export class RippleRenderer implements EventListenerObject {
  private readonly containerEl: HTMLElement;
  private containerRect: ClientRect | null = null;

  constructor(
    container: HTMLElement | ElementRef,
    private ngZone: NgZone,
    private config: RippleConfig
  ) {
    this.containerEl = coerceElement(container);
    this.containerEl.style.position = 'relative';
    this.containerEl.style.overflow = 'hidden';
  }

  setupEvents() {
    if (!this.containerEl) {
      return;
    }

    this.unregisterEvents();
    this.registerEvents(supportedEvents);
  }

  fadeInRipple(x: number, y: number) {
    const clientRect = (this.containerRect = this.containerEl.getBoundingClientRect());
    const animationConfig = { ...this.config.animation };

    const offsetY = y - clientRect.top;
    const offsetX = x - clientRect.left;
    const duration = animationConfig.enterDuration;

    const radius = distanceToFurthestCorner(x, y, clientRect);

    const ripple = document.createElement('div');

    ripple.classList.add('ripple-element');

    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;

    ripple.style.transitionDuration = `${duration}ms`;

    this.containerEl.appendChild(ripple);
    enforceStyleRecalculation(ripple);

    ripple.style.transform = 'scale(1)';

    const rippleRef = new RippleRef(this, ripple);

    this.runTimeoutOutsideOfZone(() => {
      rippleRef.fadeOut();
    }, duration);
  }

  fadeOutRipple(rippleRef: RippleRef) {
    const ripple = rippleRef.element;
    const exitDuration = this.config.animation.exitDuration;

    ripple.style.transitionDuration = `0, ${exitDuration}ms`;
    ripple.style.opacity = '0';

    this.runTimeoutOutsideOfZone(() => {
      ripple.parentNode.removeChild(ripple);
    }, exitDuration);
  }

  handleEvent(evt: MouseEvent) {
    if (evt.type === 'mousedown') {
      this.fadeInRipple(evt.x, evt.y);
    }
  }

  unregisterEvents() {
    this.ngZone.runOutsideAngular(() =>
      supportedEvents.forEach((type) => this.containerEl.removeEventListener(type, this))
    );
  }

  private registerEvents(eventTypes: string[]) {
    this.ngZone.runOutsideAngular(() =>
      eventTypes.forEach((type) => this.containerEl.addEventListener(type, this))
    );
  }

  private runTimeoutOutsideOfZone(fn: () => unknown, delay: number = 0) {
    this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }
}

function enforceStyleRecalculation(element: HTMLElement) {
  // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
  // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
  // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  window.getComputedStyle(element).getPropertyValue('opacity');
}

function coerceElement(element: HTMLElement | ElementRef): HTMLElement {
  return element instanceof HTMLElement ? element : element.nativeElement;
}

function distanceToFurthestCorner(x: number, y: number, rect: ClientRect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
