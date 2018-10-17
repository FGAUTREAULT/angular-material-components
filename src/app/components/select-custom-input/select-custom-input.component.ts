import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-select-custom-input',
  templateUrl: './select-custom-input.component.html',
  styleUrls: ['./select-custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectCustomInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
