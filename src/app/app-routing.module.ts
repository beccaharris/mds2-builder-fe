import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentComponent } from './assessment/assessment.component';
import { BatchComponent } from './batch/batch.component';
import { AppComponent } from "app/app.component";
import { PageHeaderComponent } from "app/page-header/page-header.component";
import { RecordsComponent } from "app/records/records.component";

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
       path: '',
       redirectTo: '/single_assessment',
       pathMatch: 'full'
      },{ 
       path: 'single_assessment',
       component: AssessmentComponent
      },{ 
       path: 'batch',
       component: BatchComponent
      },{
       path: 'records',
       component: RecordsComponent
      }]
  },{
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule { }