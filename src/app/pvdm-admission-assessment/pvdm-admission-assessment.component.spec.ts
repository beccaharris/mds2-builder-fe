import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvdmAdmissionAssessmentComponent } from './pvdm-admission-assessment.component';

describe('PvdmAdmissionAssessmentComponent', () => {
  let component: PvdmAdmissionAssessmentComponent;
  let fixture: ComponentFixture<PvdmAdmissionAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvdmAdmissionAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvdmAdmissionAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
