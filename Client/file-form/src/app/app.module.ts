import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DocxFileFormModule} from "./docx-file-form/docx-file-form.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocxFileFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
