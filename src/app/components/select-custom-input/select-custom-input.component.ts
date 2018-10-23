import { Component, OnInit, Input, Output, OnChanges, ViewChild, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { selectList } from 'src/app/core/model/mock.model';

export interface SelectParams {
  key: string;
  value: any;
  translationKey: string;
}

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
export class SelectCustomInputComponent implements OnInit, OnDestroy, OnChanges, ControlValueAccessor {

  /* Inputs/Outputs */
  @Input()
  selectList: SelectParams[];
  @Input()
  selectedValue: any;
  @Input()
  title: string;
  @Input()
  placeholder: string;
  @Output()
  valueChange = new EventEmitter();

  /* Widgets */
  @ViewChild('inputWidget') inputWidget: ElementRef;
  @ViewChild('selectWidget') selectWidget: ElementRef;

  /* ControlValueAccessor */
  onChange: (change) => {};
  onTouched: (change) => {};

  /* Controls */
  selectControl = new FormControl();
  inputControl = new FormControl();

  /* State */
  custom: boolean;
  isDisabled: boolean;

  /* Subscriptions */
  selectSubscription: Subscription;
  inputSubscription: Subscription;

  /* Utils */
  static isCustomValue(value: string, list: SelectParams[]): boolean {
    return value ? list.findIndex((param) => param.value.toString() === value.toString()) === -1 : false;
  }

  static getSelectValue(value: string, list: SelectParams[]): any {
    return value ? list.find((param) => param.value.toString() === value.toString()) : '';
  }

  constructor(private ref: ChangeDetectorRef) { }

  /**
   * Init component with subscription
   */
  ngOnInit() {
    this.devInit();

    this.selectSubscription = this.selectControl.valueChanges.subscribe((value) => {
      this.custom = SelectCustomInputComponent.isCustomValue(value, this.selectList);
      this.selectedValue = !this.custom ? value : '';
      this.emitChanges(this.selectedValue);
    });

    this.inputSubscription = this.inputControl.valueChanges.subscribe((value) => {
      this.emitChanges(value);
    });
  }

  /**
   * Destroy subscriptions
   */
  ngOnDestroy() {
    this.selectSubscription.unsubscribe();
    this.inputSubscription.unsubscribe();
  }

  /**
   * React to value change
   * @param changes
   */
  ngOnChanges(changes) {
    if (changes.selectedValue) {
      this.writeValue(changes.selectedValue.currentValue.toString());
    }
  }

  /**
   * Emit outpur changes
   * @param value
   */
  emitChanges(value: string) {
    this.valueChange.emit(value);
    if (this.onChange) {
      this.onChange(value);
    }
  }

  /**
   * Correct value on focus out, considering empty and list values not to be custom ones
   * @param value
   */
  onFocusOut(value: any) {
    this.writeValue(value);
  }

  /* ControlValueAccessor */

  writeValue(value: any): void {
    this.selectedValue = value.toString();
    this.custom = SelectCustomInputComponent.isCustomValue(this.selectedValue, this.selectList);
    if (!this.custom) {
      this.selectControl.setValue(value.toString());
    }
    this.ref.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // if (isDisabled) {
    //   this.inputControl.disable();
    //   this.selectControl.disable();
    // } else {
    //   this.inputControl.enable();
    //   this.selectControl.enable();
    // }
  }

  /* For development purpose */
  private devInit() {
    // this.custom = false;
    // this.title = 'Value';
    // this.placeholder = 'Select value';
    // this.selectedValue = 10;
    // this.selectList = selectList;
    // this.writeValue(this.selectedValue);
  }

}
