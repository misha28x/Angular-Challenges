import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInputComponent } from './card-input.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MC_CARD_EXAMPLE, VISA_CARD_EXAMPLE } from './consts/card.conts';

function getInputs(
  fixture: ComponentFixture<CardInputComponent>
): DebugElement[] {
  return fixture.debugElement.queryAll(By.css('input'));
}

describe('CardInputComponent', () => {
  let component: CardInputComponent;
  let fixture: ComponentFixture<CardInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardInputComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly determine type of card', () => {
    component.value = VISA_CARD_EXAMPLE;

    expect(component.cardType).toBe('visa');

    component.value = MC_CARD_EXAMPLE;

    expect(component.cardType).toBe('master-card');
  });

  it('should correctly fill inputs by passed value', () => {
    const inputs = getInputs(fixture);

    component.value = '1234567891011121';

    expect(inputs[0].nativeElement.value).toBe('1234');
    expect(inputs[1].nativeElement.value).toBe('5678');
    expect(inputs[2].nativeElement.value).toBe('9101');
    expect(inputs[3].nativeElement.value).toBe('1121');
  });

  it('should select correct input to focus on click', () => {
    const inputs = getInputs(fixture);
    component.value = '';
    fixture.debugElement.triggerEventHandler('click', {});

    fixture.detectChanges();

    expect(document.activeElement).toBe(inputs[0].nativeElement);

    component.value = '1111222233';

    fixture.debugElement.triggerEventHandler('blur', {});
    fixture.debugElement.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(document.activeElement).toBe(inputs[2].nativeElement);
  });

  it('should form correct card number', () => {
    fixture.detectChanges();
    const inputs = getInputs(fixture);

    inputs[0].nativeElement.value = '1111';
    inputs[0].nativeElement.dispatchEvent(new InputEvent('input'));
    inputs[1].nativeElement.value = '2222';
    inputs[1].nativeElement.dispatchEvent(new InputEvent('input'));
    inputs[2].nativeElement.value = '3333';
    inputs[2].nativeElement.dispatchEvent(new InputEvent('input'));
    inputs[3].nativeElement.value = '4444';
    inputs[3].nativeElement.dispatchEvent(new InputEvent('input'));

    fixture.detectChanges();
    expect(component.value).toBe('1111222233334444');
  });
});
