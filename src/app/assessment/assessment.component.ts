import { Component, OnInit } from '@angular/core';

import { DropdownOptions } from './assessment.constants';
import { AssessmentService } from '../services/assessment-service/assessment.service';
import { IAssessment } from './assessment.types';
import { Assessment } from './assessment.model';

@Component({
  selector: 'assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})

export class AssessmentComponent implements OnInit {

  assessment: IAssessment = new Assessment();
  options = DropdownOptions;

  constructor(private assessmentService:AssessmentService)
  {}

  ngOnInit()
  {}
  
  addRecord(assessment:IAssessment) {
    this.assessmentService.addAssessment(assessment);
  }
}
