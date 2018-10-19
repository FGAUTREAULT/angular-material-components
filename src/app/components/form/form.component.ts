import { Component, OnInit, Renderer, ViewChild } from '@angular/core';
import { selectList } from 'src/app/core/model/mock.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  selectList: string[] = selectList;
  initialValue;
  valueEmitted;
  valueControlled;

  selectCustomInputControl = new FormControl();
  generalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer
  ) {
    this.generalForm = this.fb.group({
      selectCustomInputControl: this.selectCustomInputControl
    });
  }

  ngOnInit() {
    this.initialValue = '3';
    this.selectCustomInputControl.setValue(this.initialValue);
    // this.selectCustomInputControl.disable();
  }

  onChange(value) {
    this.valueEmitted = value;
  }

}
