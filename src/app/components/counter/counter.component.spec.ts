import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment value on plus btn click', () => {
    component.value = 12;
    const btn = fixture.debugElement.query(By.css('.plus-btn'));

    btn.triggerEventHandler('click', {});

    expect(component.value).toBe(13);
  });

  it('should decrement value on minus btn click', () => {
    component.value = 12;
    const btn = fixture.debugElement.query(By.css('.minus-btn'));

    btn.triggerEventHandler('click', {});

    expect(component.value).toBe(11);
  });

  it('should change value on input event', () => {
    component.value = 12;
    const input = fixture.debugElement.query(By.css('.counter-input'));

    input.triggerEventHandler('input', { target: { value: 25 } });

    expect(component.value).toBe(25);
  });

  it('should prevent going lower than min value', () => {
    component.minValue = 10;
    component.value = 11;
    const minusBtn = fixture.debugElement.query(By.css('.minus-btn'));

    minusBtn.triggerEventHandler('click', {});
    minusBtn.triggerEventHandler('click', {});

    expect(component.value).toBe(10);
  });

  it('should prevent going higher than max value', () => {
    component.maxValue = 100;
    component.value = 99;
    const plusBtn = fixture.debugElement.query(By.css('.plus-btn'));

    plusBtn.triggerEventHandler('click', {});
    plusBtn.triggerEventHandler('click', {});

    expect(component.value).toBe(100);
  });
});
