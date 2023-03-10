import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DocxFormComponent} from "./docx-file-form/docx-form/docx-form.component";
import {DocxFormSuccessComponent} from "./docx-file-form/docx-form-success/docx-form-success.component";
const routes: Routes = [
  {path: "", redirectTo: "/docx-form", pathMatch: "full"},
  {path: "docx-form", component: DocxFormComponent},
  {path: "docx-form-success", component: DocxFormSuccessComponent},
  {path: "**", redirectTo: "/docx-form"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
