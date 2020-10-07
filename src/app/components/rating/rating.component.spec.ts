import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

function getStars(fixture: ComponentFixture<RatingComponent>): HTMLElement[] {
  const stars = fixture.nativeElement.querySelectorAll('.star');
  return Array.from(stars) as HTMLElement[];
}

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RatingComponent],
      imports: [NzIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.overrideComponent(RatingComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default },
    }).createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change star count according to max value', () => {
    const MAX = 10;
    component.max = MAX;

    fixture.detectChanges();

    expect(getStars(fixture).length).toBe(MAX);
  });

  it('should change active classes according to rating value', async () => {
    const getActiveStars = () =>
      getStars(fixture).filter((item) => item.classList.contains('active'));

    component.rating = 3;
    fixture.detectChanges();

    expect(getActiveStars().length).toBe(3);

    component.rating = 5;
    fixture.detectChanges();

    expect(getActiveStars().length).toBe(5);
  });

  it('should emit correct rating on click', () => {
    const index = 3;
    spyOn(component.ratingChanged, 'emit');
    const star = fixture.debugElement.queryAll(By.css('.star'))[index - 1];

    star.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.ratingChanged.emit).toHaveBeenCalledWith(index);
  });
});
