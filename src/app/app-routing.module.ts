import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentComponent } from './assessment/assessment.component';

const appRoutes: Routes = [
  { path: 'single_assessment',
    component: AssessmentComponent
  },{ 
    path: '',
    redirectTo: '/single_assessment',
    pathMatch: 'full'
  },{
    path: '**',
    redirectTo: '/single_assessment',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule { }