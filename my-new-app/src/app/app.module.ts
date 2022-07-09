import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';

import { NgxStarsComponent } from 'ngx-stars';
import { NgxStarsModule } from 'ngx-stars';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
