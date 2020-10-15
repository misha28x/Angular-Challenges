import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CounterComponent,
      multi: true,
    },
  ],
})
export class CounterComponent implements ControlValueAccessor {
  @Input() minValue = 0;
  @Input() maxValue = Number.MAX_SAFE_INTEGER;

  @Input()
  set value(val: number) {
    this.writeValue(val);
  }
  get value(): number {
    return this.counterControl.value;
  }

  @Output() valueChange = new EventEmitter();

  counterControl = new FormControl(12);

  onChange = (val: number) => {};
  onTouched = () => {};

  increment(): void {
    if (this.value >= this.maxValue) return;

    this.value = this.value + 1;
  }

  decrement(): void {
    if (this.value <= this.minValue) return;
    this.value = this.value - 1;
  }

  writeValue(counterValue: number): void {
    this.counterControl.setValue(counterValue);
    this.onChange(counterValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
