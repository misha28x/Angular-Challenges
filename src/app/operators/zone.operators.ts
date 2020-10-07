import { NgZone } from '@angular/core';
import {
  MonoTypeOperatorFunction,
  Observable,
  Observer,
  Operator,
  TeardownLogic,
} from 'rxjs';
import { map } from 'rxjs/operators';

class ZoneFreeOperator<T> implements Operator<T, T> {
  constructor(private readonly zone: NgZone) {}

  call(observer: Observer<T>, source: Observable<T>): TeardownLogic {
    return this.zone.runOutsideAngular(() => source.subscribe(observer));
  }
}

export function zoneFull<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
  return map((val) => zone.run(() => val));
}

export function zoneFree<T>(zone: NgZone): MonoTypeOperatorFunction<T> {
  return (source) => source.lift(new ZoneFreeOperator(zone));
}
