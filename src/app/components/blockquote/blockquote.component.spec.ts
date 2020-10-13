import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockquoteComponent } from './blockquote.component';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';

describe('BlockquoteComponent', () => {
  let component: BlockquoteComponent;
  let fixture: ComponentFixture<BlockquoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlockquoteComponent],
    })
      .overrideComponent(BlockquoteComponent, {
        set: {
          changeDetection: ChangeDetectionStrategy.Default,
        },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct data', () => {
    component.author = 'Oscar Wilde';
    component.about = 'Author and poet';
    component.quote = 'Be yourself; everyone else is already taken.';

    fixture.detectChanges();

    const dEl = fixture.debugElement;
    const author = dEl.query(By.css('.author')).nativeElement.innerText;
    const about = dEl.query(By.css('.about')).nativeElement.innerText;
    const quote = dEl.query(By.css('.quote')).nativeElement.innerText;

    expect(author).toBe('Oscar Wilde');
    expect(about).toBe('Author and poet');
    expect(quote).toBe('Be yourself; everyone else is already taken.');
  });
});
