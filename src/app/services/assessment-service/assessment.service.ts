import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { IAssessment } from "app/assessment/assessment.types";

@Injectable()
export class AssessmentService {

  _assessment: any;
  _assessmentArray: Array<any> = [];

  constructor(private localStorageService:LocalStorageService) { }

  /**
   * Add Assessment to _assessmentArray
   */
  addAssessment(assessment:IAssessment){
    console.log(assessment)
    this._assessmentArray.push(assessment)
    this.setRecordArray(this._assessmentArray)
  };
  setRecordArray(assessmentArray:IAssessment[]){
    this.localStorageService.set('assessment-array', assessmentArray)
  };
  getRecordArray(){
    return this.localStorageService.get('assessment-array')
  };
  removeRecordArray(){
    this.localStorageService.remove('assessment-array')
  };

}
