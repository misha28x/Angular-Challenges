import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  OnDestroy,
  HostListener,
  Input,
} from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnDestroy {
  @Input() debounceTime = 500;
  @Output() debounceClick = new EventEmitter();

  private readonly sub: Subscription;
  private clicks: Subject<void> = new Subject();

  constructor() {
    this.sub = this.clicks
      .pipe(debounceTime(this.debounceTime))
      .subscribe(() => this.debounceClick.emit());
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
    this.clicks.complete();
  }

  @HostListener('click', ['$event'])
  onClick(e): void {
    e.preventDefault();
    e.stopPropagation();
    this.clicks.next();
  }
}
