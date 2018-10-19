import { Component, OnInit, Input, Output, OnChanges, ViewChild, ElementRef, Renderer2, Renderer } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-custom-input',
  templateUrl: './select-custom-input.component.html',
  styleUrls: ['./select-custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SelectCustomInputComponent,
    multi: true
  }]
})
export class SelectCustomInputComponent implements OnInit, OnChanges {

  @Input()
  selectList: string[];
  @Input()
  selectedValue: string;
  @Input()
  title: string;
  @Input()
  placeholder: string;
  @Output()
  valueChange = new EventEmitter();

  @ViewChild('inputWidget') inputWidget: ElementRef;
  @ViewChild('selectWidget') selectWidget: ElementRef;

  onChange;

  selectControl = new FormControl();
  inputControl = new FormControl();

  custom: boolean;
  isDisabled: boolean;

  constructor(
    private renderer: Renderer
  ) { }

  ngOnInit() {

    if (!this.selectList) {
      this.custom = false;
      this.title = 'Value';
      this.placeholder = 'Select value';
      this.selectedValue = '3';
      this.selectList = ['AAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE'];
      this.writeValue(this.selectedValue);
    }

    this.selectControl.valueChanges.subscribe((value) => {
      this.custom = this.isCustomValue(value);
      this.selectedValue = !this.custom ? value : '';
      this.emitChanges(this.selectedValue);
    });

    this.inputControl.valueChanges.subscribe((value) => {
      this.emitChanges(value);
    });
  }

  ngOnChanges(changes) {
    if (changes.selectedValue) {
      this.writeValue(changes.selectedValue.currentValue);
    }
  }

  emitChanges(value) {
    this.valueChange.emit(value);
    if (this.onChange) {
      this.onChange(value);
    }
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

  writeValue(value: any): void {
    this.selectedValue = value;
    this.custom = this.isCustomValue(this.selectedValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void {
    // if (isDisabled) {
    //   this.inputControl.disable();
    //   this.selectControl.disable();
    // } else {
    //   this.inputControl.enable();
    //   this.selectControl.enable();
    // }
  }

}
