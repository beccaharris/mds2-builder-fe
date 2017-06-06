import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

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
  model = this.storage.get('assessment-array')
  

  constructor(
    private storage:LocalStorageService,
    private assessmentService:AssessmentService
  ){}

  ngOnInit(){
   this.storage.set('assessment-array',this.assessment); 
   this.assessmentService.getData(this.assessment);
   console.log(this.model)
  }
  
}
