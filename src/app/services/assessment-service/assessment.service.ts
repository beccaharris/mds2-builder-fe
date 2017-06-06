import { Injectable } from '@angular/core';
import { IAssessment } from "app/assessment/assessment.types";

@Injectable()
export class AssessmentService {

  _assessmentArray: Array<IAssessment> = new Array();
 
  /**
   * Return all assessments
   */
  get assessments() {
    return this._assessmentArray;
  }

  /**
   * Add assessment
   */
  addAssessment(assessment:IAssessment) {
    this._assessmentArray.push(Object.assign({}, assessment));
  };

}
