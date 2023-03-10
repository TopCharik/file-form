import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocxFormSuccessComponent } from './docx-form-success/docx-form-success.component';
import { DocxFormComponent } from './docx-form/docx-form.component';



@NgModule({
  declarations: [
    DocxFormSuccessComponent,
    DocxFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DocxFileFormModule { }
