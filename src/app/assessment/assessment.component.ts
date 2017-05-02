import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdmissionType, AssessmentReason, DischargeType } from './assessment.constants';
import { ComatoseState, MemoryState, IndependenceState, HearingAbility } from './assessment.constants'
import { YesNoAnswer, UnderstoodAbility, SpeechClarity, UnderstandingAbility } from './assessment.constants'

@Component({
  selector: 'assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})

export class AssessmentComponent {
  
  mdsAssessment: FormGroup;
  admissionType = AdmissionType;
  assessmentReason = AssessmentReason;
  dischargeType = DischargeType;
  comatoseState = ComatoseState;
  memoryState = MemoryState;
  independenceState = IndependenceState;
  hearingAbility = HearingAbility;
  yesnoAnswer = YesNoAnswer;
  understoodAbility = UnderstoodAbility;
  speechClarity = SpeechClarity;
  understandingAbility = UnderstandingAbility;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.mdsAssessment = this.formBuilder.group({
      master_no: ['1234', Validators.required],
      resident_identifier: '1234567890',
      aa7: '01',
      aa8: '01', 
      aa9: '--',
      ab1: '20170422',
      a3: '20170422',
      b1: '0',
      b2a: '--',
      b4: '0',
      c1: '0',
      c3b: '0',
      c3c: '0',
      c3d: '0',
      c3e: '0',
      c3f: '0',
      c4: '0',
      c5: '0',
      c6: '0',
    })
  }
}