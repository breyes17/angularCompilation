import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamOneComponent } from './exam-one.component';

describe('ExamOneComponent', () => {
  let component: ExamOneComponent;
  let fixture: ComponentFixture<ExamOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
