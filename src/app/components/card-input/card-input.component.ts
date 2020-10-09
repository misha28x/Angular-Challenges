import {
  ChangeDetectionStrategy,
  ViewChildren,
  Component,
  ElementRef,
  QueryList,
  Input,
} from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CreditCardService } from './credit-card.service';
import { CreditCardType } from './types/credit-card-type';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardInputComponent {
  @ViewChildren('part') parts: QueryList<ElementRef<HTMLInputElement>>;
  @Input() readonly: boolean;

  cardForm: FormGroup;

  get value(): string {
    return this.controls.map((ctrl) => ctrl.value).join('');
  }

  get controls(): FormControl[] {
    return (this.cardForm.get('parts') as FormArray).controls as FormControl[];
  }

  get cardType(): CreditCardType {
    const cardNumber = this.value;
    console.log(this.cardSv.getCardType(cardNumber));
    return this.cardSv.getCardType(cardNumber);
  }

  constructor(private fb: FormBuilder, private cardSv: CreditCardService) {
    this.cardForm = this.getCardForm();
  }

  handleInput(control: FormControl, index: number): void {
    const isLast = index >= this.controls.length - 1;
    if (isLast) {
      return;
    }

    const nextControl = this.parts.toArray()[index + 1].nativeElement;

    this.autoFocusNextControl(control, nextControl);
  }

  handleBackspace(control: FormControl, index: number): void {
    const isFirst = index === 0;
    if (isFirst) {
      return;
    }

    const prevControl = this.parts.toArray()[index - 1];

    this.autoFocusPrevControl(control, prevControl.nativeElement);
  }

  private autoFocusPrevControl(
    control: FormControl,
    prevControl: HTMLInputElement
  ): void {
    const isEmpty = control.value.length === 0;

    if (isEmpty && prevControl) {
      prevControl.focus();
    }
  }

  private autoFocusNextControl(
    control: FormControl,
    nextControl: HTMLInputElement
  ): void {
    const isCompleted = control.value.length === 4;

    if (isCompleted && nextControl) {
      nextControl.focus();
    }
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
