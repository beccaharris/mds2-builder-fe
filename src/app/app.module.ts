import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-header/main-header.component';
import { LogoComponent } from './logo/logo.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { CsvService } from './services/csv-service/csv.service';
import { AssessmentService } from './services/assessment-service/assessment.service';
import { TabsComponent } from './tabs/tabs.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    PageHeaderComponent,
    AssessmentComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CsvService,
    AssessmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
