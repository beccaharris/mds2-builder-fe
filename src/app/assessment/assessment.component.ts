import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdmissionType, AssessmentReason } from './assessment.constants';


@Component({
  selector: 'assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent {
  mdsAssessment: FormGroup;
  admissionType = AdmissionType;
  assessmentReason = AssessmentReason;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.mdsAssessment = this.formBuilder.group({
      master_no: ['1234', Validators.required],
      resident_identifier: '1234567890',
      aa7: '01',
      aa8: '01', 
    })
  }
}