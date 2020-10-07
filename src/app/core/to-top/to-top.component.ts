import {
  ChangeDetectionStrategy,
  HostBinding,
  Component,
  OnDestroy,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';

import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

const SCROLL_THRESHOLD = 200;

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToTopComponent implements OnDestroy {
  @HostBinding('class.scrolled') get scrolledState(): boolean {
    return this.isScrolled;
  }

  private scrollSub: Subscription;
  private isScrolled = false;

  constructor(private vs: ViewportScroller) {
    this.listenToScroll();
  }

  ngOnDestroy(): void {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();
    }
  }

  scrollToTop(): void {
    this.vs.scrollToPosition([0, 0]);
    this.isScrolled = false;
  }

  private listenToScroll(): void {
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(
        debounceTime(500),
        startWith(this.vs.getScrollPosition()),
        map(() => this.vs.getScrollPosition()),
        map(([, offsetY]) => offsetY > SCROLL_THRESHOLD)
      )
      .subscribe((isScrolled) => (this.isScrolled = isScrolled));
  }
}
