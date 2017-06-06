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
  options = DropdownOptions
  assessment: IAssessment = new Assessment()

  constructor(
    private assessmentService:AssessmentService
  ){}

  ngOnInit(){
    this.assessmentService.removeRecordArray()
  }
  
  addRecord(assessment:IAssessment){
    this.assessmentService.addAssessment(assessment)
  }
}
