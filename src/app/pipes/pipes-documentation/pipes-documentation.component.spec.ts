import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDocumentationComponent } from './pipes-documentation.component';

describe('PipesDocumentationComponent', () => {
  let component: PipesDocumentationComponent;
  let fixture: ComponentFixture<PipesDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
