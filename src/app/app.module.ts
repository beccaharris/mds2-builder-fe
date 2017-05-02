import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-header/main-header.component';
import { LogoComponent } from './logo/logo.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AssessmentComponent } from './assessment/assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    PageHeaderComponent,
    AssessmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
