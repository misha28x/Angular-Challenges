import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';

import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardInputComponent implements AfterViewInit {
  @ViewChildren('input') parts: QueryList<HTMLInputElement>;
  @Input() readonly: boolean;

  cardForm: FormGroup;

  get controls(): FormControl[] {
    return (this.cardForm.get('parts') as FormArray).controls as FormControl[];
  }

  constructor(private fb: FormBuilder) {
    this.cardForm = this.getCardForm();
  }

  ngAfterViewInit(): void {
    this.parts.changes.subscribe(console.log);
  }

  handleInput(control: AbstractControl, index: number): void {
    console.log(this.parts);
    const isLast = index > this.controls.length;
    const nextControl = isLast ? null : this.parts[index + 1];

    if (!control.errors && nextControl) {
      nextControl.focus();
    }
  }

  private getCardForm(): FormGroup {
    return this.fb.group({ parts: this.getPartsArray() });
  }

  private getPartsArray(): FormArray {
    return this.fb.array(
      ['', '', '', ''],
      [Validators.minLength(3), Validators.required]
    );
  }
}
