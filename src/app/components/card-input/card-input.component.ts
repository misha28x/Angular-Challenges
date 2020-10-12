import {
  ChangeDetectionStrategy,
  ViewChildren,
  Component,
  ElementRef,
  QueryList,
  Input,
  HostListener,
} from '@angular/core';

import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';

import { CreditCardService } from './credit-card.service';
import { CreditCardType } from './types/credit-card-type';
import { EMPTY_CARD_NUMBER } from './consts/card.conts';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CardInputComponent,
      multi: true,
    },
  ],
})
export class CardInputComponent implements ControlValueAccessor {
  @ViewChildren('part') parts: QueryList<ElementRef<HTMLInputElement>>;
  @Input() readonly: boolean;

  cardForm: FormGroup;

  onTouched = () => {};
  onChange = () => {};

  get value(): string {
    return this.controls.map((ctrl) => ctrl.value).join('');
  }

  set value(cardNumber: string) {
    const parts = cardNumber.match(/.{1,4}/g) || [];

    parts.forEach((part = '0000', i) => this.controls[i].setValue(part));
  }

  get controls(): FormControl[] {
    return (this.cardForm.get('parts') as FormArray).controls as FormControl[];
  }

  get cardType(): CreditCardType {
    const cardNumber = this.value;
    return this.cardSv.getCardType(cardNumber);
  }

  constructor(private fb: FormBuilder, private cardSv: CreditCardService) {
    this.cardForm = this.getCardForm();
  }

  getControlType(index: number): 'text' | 'password' {
    if (!this.readonly || index > 2) {
      return 'text';
    }

    return 'password';
  }

  writeValue(val: string): void {
    this.value = val;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('click', ['$event'])
  onContainerClick(): void {
    this.autoFocusControl();
  }

  private autoFocusControl(): void {
    if (this.isNotComplete(this.controls[0].value)) {
      this.focusPart(0);
    } else if (this.isNotComplete(this.controls[1].value)) {
      this.focusPart(1);
    } else if (this.isNotComplete(this.controls[2].value)) {
      this.focusPart(2);
    } else {
      this.focusPart(3);
    }
  }

  handleInput(control: FormControl, index: number): void {
    const isLast = index >= this.controls.length - 1;

    if (isLast) {
      return;
    }

    this.autoFocusNextControl(control, index + 1);
  }

  handleBackspace(control: FormControl, index: number): void {
    const isFirst = index === 0;

    if (isFirst) {
      return;
    }

    this.autoFocusPrevControl(control, index - 1);
  }

  private autoFocusPrevControl(
    control: FormControl,
    prevControl: number
  ): void {
    const isEmpty = control.value.length === 0;

    if (isEmpty) {
      this.focusPart(prevControl);
    }
  }

  private autoFocusNextControl(
    control: FormControl,
    nextControl: number
  ): void {
    const isCompleted = control.value.length === 4;

    if (isCompleted) {
      this.focusPart(nextControl);
    }
  }

  private isNotComplete(controlValue: string): boolean {
    return controlValue.length < 4;
  }

  private focusPart(index: number): void {
    this.parts.toArray()[index].nativeElement.focus();
  }

  private getCardForm(): FormGroup {
    return this.fb.group({ parts: this.getPartsArray() });
  }

  private getPartsArray(): FormArray {
    return this.fb.array(
      ['', '', '', ''],
      [Validators.min(4), Validators.required]
    );
  }
}
