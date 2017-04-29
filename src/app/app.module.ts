import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PvdmNavIconComponent } from './pvdm-nav-icon/pvdm-nav-icon.component';
import { PvdmHeaderComponent } from './pvdm-main-header/pvdm-main-header.component';
import { PvdmLogoComponent } from './pvdm-logo/pvdm-logo.component';
import { PvdmPageHeaderComponent } from './pvdm-page-header/pvdm-page-header.component';
import { PvdmAdmissionAssessmentComponent } from './pvdm-admission-assessment/pvdm-admission-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    PvdmNavIconComponent,
    PvdmHeaderComponent,
    PvdmLogoComponent,
    PvdmPageHeaderComponent,
    PvdmAdmissionAssessmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
