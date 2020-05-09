import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  log(value) {
    console.log(value);
  }

  submitForm(form: FormGroup) {
    console.log(form.value);
  }
}
