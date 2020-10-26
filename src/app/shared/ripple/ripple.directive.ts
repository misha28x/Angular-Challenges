import { Directive, ElementRef, NgZone, OnInit } from '@angular/core';

import { RippleRenderer } from './ripple-renderer';
import { RippleConfig } from './types/ripple.config';

const rippleConfig: RippleConfig = {
  color: '#7cc4fa',
  animation: {
    enterDuration: 500,
    exitDuration: 400,
  },
};

@Directive({
  selector: '[appRipple]',
})
export class RippleDirective implements OnInit {
  private rippleRenderer: RippleRenderer;

  constructor(private elRef: ElementRef, ngZone: NgZone) {
    this.rippleRenderer = new RippleRenderer(elRef.nativeElement, ngZone, rippleConfig);
  }

  ngOnInit() {
    this.setupTriggerEvents();
  }

  private setupTriggerEvents() {
    this.rippleRenderer.setupEvents();
  }
}
