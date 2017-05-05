import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdmissionType, AssessmentReason, DischargeType, 
         ComatoseState, MemoryState, IndependenceState, 
         HearingAbility, YesNoAnswer, UnderstoodAbility, 
         SpeechClarity, UnderstandingAbility, SeeingAbility,
         IndicatorPresence, MoodPersistence, BehaviouralSymptoms 
} from './assessment.constants'

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
  seeingAbility = SeeingAbility;
  indicatorPresence = IndicatorPresence;
  moodPersistence = MoodPersistence;
  behaviouralSymptoms = BehaviouralSymptoms;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.mdsAssessment = this.formBuilder.group({
      master_no: ['1234', Validators.required],
      resident_identifier: '1234567890',
      a3: '20170422',
      aa7: '01',
      aa8: '01', 
      aa9: '--',
      ab1: '20170422',
      ab10a: '-',
      ab10b: '-',
      ab10c: '-',
      ab10d: '-',
      ab10e: '-',
      ab10f: '-',
      ab2a: '-',
      ab2b: '-',
      ab3: '-',
      ab5a: '-',
      ab5b: '-',
      ab5c: '-',
      ab5d: '-',
      ab5e: '-',
      ab7: '-',
      ab8: '-',
      ab9: '-',
      ac1a: '-',
      ac1b: '-',
      ac1c: '-',
      ac1d: '-',
      ac1e: '-',
      ac1f: '-',
      ac1g: '-',
      ac1i: '-',
      ac1j: '-',
      ac1k: '-',
      ac1m: '-',
      ac1n: '-',
      ac1o: '-',
      ac1p: '-',
      ac1q: '-',
      ac1s: '-',
      ac1t: '-',
      ac1u: '-',
      ac1v: '-',
      ac1w: '-',
      ad1: '-',
      ad2: 'OTHR',
      b1: '0',
      b2a: '0',
      b2b: '-',
      b3a: '-',
      b3b: '-',
      b3c: '-',
      b3d: '-',
      b4: '0',
      b5a: '-',
      b5b: '-',
      b5c: '-',
      b5d: '-',
      b5e: '-',
      b5f: '-',
      b6: '-',
      c1: '0',
      c2a: '-',
      c2b: '-',
      c2c: '-',
      c3a: '-',
      c3b: '0',
      c3c: '0',
      c3d: '0',
      c3e: '0',
      c3f: '0',
      c4: '0',
      c5: '0',
      c6: '0',
      c7: '-',
      d1: '0',
      d2a: '0',
      d2b: '0',
      d3: '0',
      e1a: '0',
      e1b: '0',
      e1c: '0',
      e1d: '0',
      e1e: '0',
      e1f: '0',
      e1g: '0',
      e1h: '0',
      e1i: '0',
      e1j: '0',
      e1k: '0',
      e1l: '0',
      e1m: '0',
      e1n: '0',
      e1o: '0',
      e1p: '0',
      e2: '0',
      e3: '-',
      e4aa: '0',
      e4ab: '--',
      e4ba: '0',
      e4bb: '--',
      e4ca: '0',
      e4cb: '--',
      e4da: '0',
      e4db: '--',
      e4ea: '0',
      e4eb: '--',
      e5: '-',
    })
  }
}