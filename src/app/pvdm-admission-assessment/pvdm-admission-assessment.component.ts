import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'pvdm-admission-assessment',
  templateUrl: './pvdm-admission-assessment.component.html',
  styleUrls: ['./pvdm-admission-assessment.component.scss']
})
export class PvdmAdmissionAssessmentComponent {
  name = new FormControl();
}
