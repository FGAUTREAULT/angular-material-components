import { Component, OnInit } from '@angular/core';
import { selectList } from 'src/app/core/model/mock.model';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectParams } from '../select-custom-input/select-custom-input.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  selectList: SelectParams[] = selectList;
  initialValue;
  valueEmitted;
  valueControlled;

  selectCustomInputControl = new FormControl();
  generalForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.generalForm = this.fb.group({
      selectCustomInputControl: this.selectCustomInputControl
    });
  }

  ngOnInit() {
    this.initialValue = '30';
    this.selectCustomInputControl.setValue(this.initialValue);
    // this.selectCustomInputControl.disable();
  }

  onChange(value) {
    this.valueEmitted = value;
  }

}
