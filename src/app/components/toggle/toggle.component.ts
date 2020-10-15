import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ToggleComponent,
      multi: true,
    },
  ],
})
export class ToggleComponent implements ControlValueAccessor {
  @HostBinding('class.toggled-on') get isOn(): boolean {
    return this._state;
  }

  @HostBinding('class.toggled-off') get isOf(): boolean {
    return !this._state;
  }

  @Input()
  set initialValue(val: boolean) {
    this._state = val;
  }

  private _state = false;

  @Output() valueChange = new EventEmitter();

  onChange = () => {};
  onTouched = () => {};

  @HostListener('click')
  onClick(): void {
    this._state = !this._state;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: boolean): void {
    this._state = val;
  }
}
