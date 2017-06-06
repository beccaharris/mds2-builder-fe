import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-header/main-header.component';
import { LogoComponent } from './logo/logo.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { CsvService } from './services/csv-service/csv.service';
import { AssessmentService } from './services/assessment-service/assessment.service';
import { BatchComponent } from './batch/batch.component';
import { RecordsComponent } from './records/records.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    PageHeaderComponent,
    AssessmentComponent,
    BatchComponent,
    RecordsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'app',
      storageType: 'localStorage'
    }),
    AppRoutingModule
  ],
  providers: [
    CsvService,
    AssessmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
