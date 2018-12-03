import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizIndexComponent } from './quiz-index.component';

describe('QuizIndexComponent', () => {
  let component: QuizIndexComponent;
  let fixture: ComponentFixture<QuizIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
