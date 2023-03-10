import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocxFormSuccessComponent } from './docx-form-success/docx-form-success.component';
import { DocxFormComponent } from './docx-form/docx-form.component';
import {RouterLinkWithHref} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DocxFormSuccessComponent,
    DocxFormComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    ReactiveFormsModule
  ]
})
export class DocxFileFormModule { }
