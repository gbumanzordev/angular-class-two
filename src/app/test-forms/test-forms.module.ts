import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


@NgModule({
  declarations: [TemplateDrivenFormComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TestFormsModule { }
