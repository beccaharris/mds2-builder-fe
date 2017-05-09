/* ---- For AA7 ---- */
export const AdmissionType = [
  { key: '01', label: '01 - Admission'},
  { key: '09', label: '09 - Re-Entry'}
];

/* ---- For AA8 ---- */
export const AssessmentReason = [
  { key: '01', label: '01 - Admission'},
  { key: '02', label: '02 - Annual'},
  { key: '03', label: '03 - Significant Change in Status'},
  { key: '04', label: '04 - Significant Change of Prior Full Assessment'},
  { key: '05', label: '05 - Quarterly Review Assessment'},
  { key: '10', label: '10 - Significant Change of Prior Quarterly Assessment'}
];

/* ---- For AA9 ---- */
export const DischargeType = [
  { key: '--', label: '--'},
  { key: '06', label: '06 - Discharge — Return Not Anticipated'},
  { key: '07', label: '07 - Discharge — Return Anticipated'},
  { key: '08', label: '08 - Discharged Prior to Completing Initial Assessment'},
];

/* ---- For B1 ---- */
export const ComatoseState = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Not comatose or semi-comatose'},
  { key: '1', label: '1 - Comatose or in a persistent vegetative state'}
];

/* ---- For B2a ---- */
export const MemoryState = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - No memory problem'},
  { key: '1', label: '1 - Memory problem'}
];

/* ---- For B4 ---- */
export const IndependenceState = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Independent'},
  { key: '1', label: '1 - Modified Independence'},
  { key: '2', label: '2 - Moderately Impaired'},
  { key: '3', label: '3 - Severely Impaired'},
];

/* ---- For C1 ---- */
export const HearingAbility = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Hears Adequately'},
  { key: '1', label: '1 - Minimal Difficulty'},
  { key: '2', label: '2 - Hears in special situations only'},
  { key: '3', label: '3 - Severely Impaired'},
];

/* ---- For C3b, C3c, C3d, C3e, C3f, D2a, D2b, D3, H2d, H3d, H3i, I1a, I1s, I1t, I1w, 
        I2f, I2h, I2k, J4a, J4c, J4d, J5c ---- */
export const YesNoAnswer = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - No'},
  { key: '1', label: '1 - Yes'},
];

/* ---- For C4 ---- */
export const UnderstoodAbility = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Understood'},
  { key: '1', label: '1 - Usually Understood'},
  { key: '2', label: '2 - Sometimes Understood'},
  { key: '3', label: '3 - Rarely or Never Understood'},
];

/* ---- For C5 ---- */
export const SpeechClarity = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - No Change'},
  { key: '1', label: '1 - Improved'},
  { key: '2', label: '2 - Deteriorated'},
];

/* ---- For C6 ---- */
export const UnderstandingAbility = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Understands'},
  { key: '1', label: '1 - Usually Understands'},
  { key: '2', label: '2 - Sometimes Understands'},
  { key: '3', label: '3 - Rarely or Never Understands'},
]

/* ---- For D1 ---- */
export const SeeingAbility = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Sees Adequately'},
  { key: '1', label: '1 - Minimal Difficulty'},
  { key: '2', label: '2 - Sees in special situations only'},
  { key: '3', label: '3 - Severely Impaired'},
];

/* ---- For E1a, E1b, E1c, E1d, E1e, E1f, E1g, E1h, E1i, E1j, E1k, E1l, E1m, E1n, E1o, E1p ---- */
export const IndicatorPresence = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Indicator not exhibited in last 30 days'},
  { key: '0', label: '1 - Indicator of this type exhibited up to five days a week'},
  { key: '0', label: '2 - Indicator of this type exhibited daily or almost daily'}
];

/* ---- For E2 ---- */
export const MoodPersistence = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - No mood indicators'},
  { key: '1', label: '1 - Indicators present, easily altered'},
  { key: '2', label: '2 - Indicators present, not easily altered'}
];

/* ---- For E4aA, E4bA, E4cA, E4dA, E4eA ---- */
export const BehaviouralSymptoms = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Behavioural symptom was not exhibited in last seven days'},
  { key: '1', label: '1 - Behavioural symptom occurred 1 to 3 days in the last seven days'},
  { key: '2', label: '2 - Behavioural symptom occurred 4 to 6 days, but less than daily'},
  { key: '3', label: '3 - Behavioural symptom occurred daily or more frequently'}
];

/* ---- For G1aA, G1bA, G1eA, G1gA, G1hA, G1iA,   ---- */
export const PerformanceState = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Independent'},
  { key: '1', label: '1 - Supervision'},
  { key: '2', label: '2 - Limited Assistance'},
  { key: '3', label: '3 - Extensive Assistance'},
  { key: '4', label: '4 - Total Dependence'},
  { key: '8', label: '8 - Activity did not occur during the entire 7-day period'}
];

/* ---- For G1bB ---- */
export const HelpRequired = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - No setup or physical help from staff'},
  { key: '1', label: '1 - Setup help only'},
  { key: '2', label: '2 - One person physical assist'},
  { key: '3', label: '3 - Two+ persons physical assist'},
  { key: '8', label: '8 - ADL activity did not occur during the entire 7-day period'}
];

/* ---- For G4aA, G4bA, G4cA, G4dA, G4eA, G4fA ---- */
export const MotionRange = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - No limitation'},
  { key: '1', label: '1 - Limitation on one side'},
  { key: '2', label: '2 - Limitation on both sides'}
];

/* ---- For H1a, H1b ---- */
export const ContinenceState = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Continent'},
  { key: '1', label: '1 - Usually Continent'},
  { key: '2', label: '2 - Occasionally Incontinent'},
  { key: '3', label: '3 - Frequently Incontinent'},
  { key: '4', label: '4 - Incontinent'}
];

/* ---- For H3a ---- */
export const ToiletingPlan = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - None'},
  { key: '1', label: '1 - Toileting plan used'}
];

/* ---- For H3b ---- */
export const BladderRetrainingProgram = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - None'},
  { key: '1', label: '1 - Bladder retraining program used'}
];

/* ---- For J1c, J1e, J1h, J1j, J1o ---- */
export const SevenDaysOccurrence = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - Did not occur'},
  { key: '1', label: '1 - Occurred within the past seven days'}
];

/* ---- For J2a ---- */
export const PainFrequency  = [
  { key: '--', label: '--'},
  { key: '0', label: '0 - No pain'},
  { key: '1', label: '1 - Pain less than daily'},
  { key: '2', label: '2 - Pain Daily'}
];

/* ---- For J2b ---- */
export const PainIntensity = [
  { key: '--', label: '--'},
  { key: '1', label: '1 - Mild pain'},
  { key: '2', label: '2 - Moderate pain'},
  { key: '3', label: '3 - Times when pain is horrible or excruciating'}
];
