import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rebate-form',
  templateUrl: './rebate-form.component.html',
  styleUrls: ['./rebate-form.component.scss']
})
export class RebateFormComponent implements OnInit {

  firstFormGroup: FormGroup;
  exampleFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      firstCtrl: ['', Validators.required]
    });
    this.exampleFormGroup = this.fb.group({
      example1Ctrl: ['', Validators.required],
      example2Ctrl: ['', Validators.required],
    });
  }

}
