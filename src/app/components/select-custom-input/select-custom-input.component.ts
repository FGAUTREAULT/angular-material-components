import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-custom-input',
  templateUrl: './select-custom-input.component.html',
  styleUrls: ['./select-custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCustomInputComponent implements OnInit {

  @Input()
  selectList: string[];
  @Input()
  selectedValue: string;

  @ViewChild('inputWidget')
  inputWidget: ElementRef;

  selectControl = new FormControl();
  inputControl = new FormControl();

  custom: boolean;

  constructor() {
    this.custom = false;
    this.selectedValue = '3';
    this.selectList = ['AAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE'];
  }

  ngOnInit() {

    this.custom = this.isCustomValue(this.selectedValue);
    this.selectControl.patchValue(this.selectedValue);

    this.selectControl.valueChanges.subscribe((value) => {
      this.custom = this.isCustomValue(value);
      this.selectedValue = !this.custom ? value : '';
    });

  }

  private isCustomValue(value: string): boolean {
    return value ? this.selectList.indexOf(value) === -1 : false;
  }

  onFocusOut(value) {
    this.custom = value !== '';
    if (!this.custom) {
      this.selectControl.patchValue(value);
    }
  }

}
