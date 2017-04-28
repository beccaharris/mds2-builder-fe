import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PvdmNavIconComponent } from './pvdm-nav-icon/pvdm-nav-icon.component';
import { PvdmHeaderComponent } from './pvdm-header/pvdm-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PvdmNavIconComponent,
    PvdmHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
