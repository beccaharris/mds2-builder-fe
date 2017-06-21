export const DropdownOptions = {

  /* ---- For AA7 ---- */
  admissionType: [
    { key: '1', label: '1 - Admission'},
    { key: '9', label: '9 - Re-Entry'}
  ],
  
  /* ---- For AA8 ---- */
  assessmentReason: [
    { key: '1', label: '1 - Admission'},
    { key: '2', label: '2 - Annual'},
    { key: '3', label: '3 - Significant Change in Status'},
    { key: '4', label: '4 - Significant Change of Prior Full Assessment'},
    { key: '5', label: '5 - Quarterly Review Assessment'},
    { key: '10', label: '10 - Significant Change of Prior Quarterly Assessment'}
  ],

  /* ---- For AA9 ---- */
  dischargeType: [
    { key: '--', label: '--'},
    { key: '6', label: '6 - Discharge — Return Not Anticipated'},
    { key: '7', label: '7 - Discharge — Return Anticipated'},
    { key: '8', label: '8 - Discharged Prior to Completing Initial Assessment'},
  ],

  /* ---- For B1 ---- */
  comatoseState: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Not comatose or semi-comatose'},
    { key: '1', label: '1 - Comatose or in a persistent vegetative state'}
  ],

  /* ---- For B2a ---- */
  memoryState: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - No memory problem'},
    { key: '1', label: '1 - Memory problem'}
  ],

  /* ---- For B4 ---- */
  independenceState: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Independent'},
    { key: '1', label: '1 - Modified Independence'},
    { key: '2', label: '2 - Moderately Impaired'},
    { key: '3', label: '3 - Severely Impaired'},
  ],

  /* ---- For C1 ---- */
  hearingAbility: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Hears Adequately'},
    { key: '1', label: '1 - Minimal Difficulty'},
    { key: '2', label: '2 - Hears in special situations only'},
    { key: '3', label: '3 - Severely Impaired'},
  ],

  /* ---- For C3b, C3c, C3d, C3e, C3f, D2a, D2b, D3, H2d, H3d, H3i, I1a, I1s, I1t, I1w, 
          I2f, I2h, I2k, J4a, J4c, J4d, J5c, K5a, K5b, K5h, L1c, L1d, L1e, M3, N1a, N1b, 
          N1c, P1aO ---- */
  yesNoAnswer: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - No'},
    { key: '1', label: '1 - Yes'},
  ],

  /* ---- For C4 ---- */
  understoodAbility: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Understood'},
    { key: '1', label: '1 - Usually Understood'},
    { key: '2', label: '2 - Sometimes Understood'},
    { key: '3', label: '3 - Rarely or Never Understood'},
  ],

  /* ---- For C5 ---- */
  speechClarity: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - No Change'},
    { key: '1', label: '1 - Improved'},
    { key: '2', label: '2 - Deteriorated'},
  ],
  
  /* ---- For C6 ---- */
  understandingAbility: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Understands'},
    { key: '1', label: '1 - Usually Understands'},
    { key: '2', label: '2 - Sometimes Understands'},
    { key: '3', label: '3 - Rarely or Never Understands'},
  ],
  
  /* ---- For D1 ---- */
  seeingAbility: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Sees Adequately'},
    { key: '1', label: '1 - Minimal Difficulty'},
    { key: '2', label: '2 - Sees in special situations only'},
    { key: '3', label: '3 - Severely Impaired'},
  ],
  
  /* ---- For E1a, E1b, E1c, E1d, E1e, E1f, E1g, E1h, E1i, E1j, E1k, E1l, E1m, E1n, E1o, E1p ---- */
  indicatorPresence: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Indicator not exhibited in last 30 days'},
    { key: '1', label: '1 - Indicator of this type exhibited up to five days a week'},
    { key: '2', label: '2 - Indicator of this type exhibited daily or almost daily'}
  ],
  
  /* ---- For E2 ---- */
  moodPersistence: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - No mood indicators'},
    { key: '1', label: '1 - Indicators present, easily altered'},
    { key: '2', label: '2 - Indicators present, not easily altered'}
  ],
  
  /* ---- For E4aA, E4bA, E4cA, E4dA, E4eA ---- */
  behaviouralSymptoms: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Behavioural symptom was not exhibited in last seven days'},
    { key: '1', label: '1 - Behavioural symptom occurred 1 to 3 days in the last seven days'},
    { key: '2', label: '2 - Behavioural symptom occurred 4 to 6 days, but less than daily'},
    { key: '3', label: '3 - Behavioural symptom occurred daily or more frequently'}
  ],
  
  /* ---- For G1aA, G1bA, G1eA, G1gA, G1hA, G1iA,   ---- */
  performanceState: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Independent'},
    { key: '1', label: '1 - Supervision'},
    { key: '2', label: '2 - Limited Assistance'},
    { key: '3', label: '3 - Extensive Assistance'},
    { key: '4', label: '4 - Total Dependence'},
    { key: '8', label: '8 - Activity did not occur during the entire 7-day period'}
  ],
  
  /* ---- For G1bB ---- */
  helpRequired: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - No setup or physical help from staff'},
    { key: '1', label: '1 - Setup help only'},
    { key: '2', label: '2 - One person physical assist'},
    { key: '3', label: '3 - Two+ persons physical assist'},
    { key: '8', label: '8 - ADL activity did not occur during the entire 7-day period'}
  ],
  
  /* ---- For G4aA, G4bA, G4cA, G4dA, G4eA, G4fA ---- */
  motionRange: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - No limitation'},
    { key: '1', label: '1 - Limitation on one side'},
    { key: '2', label: '2 - Limitation on both sides'}
  ],
  
  /* ---- For H1a, H1b ---- */
  continenceState: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Continent'},
    { key: '1', label: '1 - Usually Continent'},
    { key: '2', label: '2 - Occasionally Incontinent'},
    { key: '3', label: '3 - Frequently Incontinent'},
    { key: '4', label: '4 - Incontinent'}
  ],
  
  /* ---- For H3a ---- */
  toiletingPlan: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - None'},
    { key: '1', label: '1 - Toileting plan used'}
  ],
  
  /* ---- For H3b ---- */
  bladderRetrainingProgram: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - None'},
    { key: '1', label: '1 - Bladder retraining program used'}
  ],
  
  /* ---- For J1c, J1e, J1h, J1j, J1o ---- */
  sevenDaysOccurrence: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Did not occur'},
    { key: '1', label: '1 - Occurred within the past seven days'}
  ],
  
  /* ---- For J2a ---- */
  painFrequency : [
    { key: '--', label: '--'},
    { key: '0', label: '0 - No pain'},
    { key: '1', label: '1 - Pain less than daily'},
    { key: '2', label: '2 - Pain Daily'}
  ],
  
  /* ---- For J2b ---- */
  painIntensity: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - No pain'},
    { key: '1', label: '1 - Mild pain'},
    { key: '2', label: '2 - Moderate pain'},
    { key: '3', label: '3 - Times when pain is horrible or excruciating'}
  ],
  
  /* ---- For K6a ---- */
  caloriePercent: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - None'},
    { key: '1', label: '1 - 1% to 25%'},
    { key: '2', label: '2 - 26% to 50%'},
    { key: '3', label: '3 - 51% to 75%'},
    { key: '4', label: '4 - 76% to 100%'} 
  ],
  
  /* ---- For K6b ---- */
  calorieCount: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - None'},
    { key: '1', label: '1 - 1 to 500 cc/day'},
    { key: '2', label: '2 - 501 to 1000 cc/day'},
    { key: '3', label: '3 - 1001 to 1500 cc/day'},
    { key: '4', label: '4 - 1501 to 2000 cc/day'},
    { key: '5', label: '5 - 2001 or more cc/day'} 
  ],
  
  /* ---- For M1a, M1b, M1c, M1d ---- */
  ulcerNumber: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - None'},
    { key: '1', label: '1 - 1 ulcer'},
    { key: '2', label: '2 - 2 ulcers'},
    { key: '3', label: '3 - 3 ulcers'},
    { key: '4', label: '4 - 4 ulcers'},
    { key: '5', label: '5 - 5 ulcers'},
    { key: '6', label: '6 - 6 ulcers'},
    { key: '7', label: '7 - 7 ulcers'},
    { key: '8', label: '8 - 8 ulcers'},
    { key: '9', label: '9 - 9 or more ulcers'} 
  ],
  
  /* ---- For M2a ---- */
  ulcerStage: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - None'},
    { key: '1', label: '1 - Stage 1'},
    { key: '2', label: '2 - Stage 2'},
    { key: '3', label: '3 - Stage 3'},
    { key: '4', label: '4 - Stage 4'},
  ],
  
  /* ---- For M4a, M5b, M5c, M5d, M5f ---- */
  evidenceOfProblems: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - None'},
    { key: '1', label: '1 - Evidence of such problem(s) in last seven days'}
  ],
  
  /* ---- For N2 ---- */
  activityTime: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Most: more than 2/3 of the time'},
    { key: '1', label: '1 - Some: from 1/3 to 2/3 of the time'},
    { key: '2', label: '2 - Little: less than 1/3 of the time'},
    { key: '3', label: '3 - None'},
  ],
  
  /* ---- For P4c, P4d, P4e ---- */
  timeUsed: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Not used'},
    { key: '1', label: '1 - Used less than daily'},
    { key: '2', label: '2 - Used daily'}
  ],
  
  /* ---- For R3a ---- */
  dischargedTo: [
    { key: '--', label: '--'},
    { key: '0', label: '0 - Ambulatory Health Service'},
    { key: '1', label: '1 - Inpatient Acute Care Service'},
    { key: '2', label: '2 - Inpatient Rehabilitation Service (General)'},
    { key: '3', label: '3 - Inpatient Continuing Care Service'},
    { key: '4', label: '4 - Residential Care Service (24-Hour Nursing Care)'},
    { key: '5', label: '5 - Inpatient Psychiatry Service'},
    { key: '6', label: '6 - Other/Unclassified Service'},
    { key: '7', label: '7 - Inpatient Rehabilitation Service (Specialized)'},
    { key: '8', label: '8 - Home Care Service'},
    { key: '9', label: '9 - Residential Care Service (Board and Care)'}, 
    { key: '10', label: '10 - Private Home (No Home Care)'},
    { key: '11', label: '11 - Deceased'} 
  ]
}
