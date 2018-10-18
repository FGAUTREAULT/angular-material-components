import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-custom-trigger',
  templateUrl: './select-custom-trigger.component.html',
  styleUrls: ['./select-custom-trigger.component.scss']
})
export class SelectCustomTriggerComponent implements OnInit {

  selectControl = new FormControl();

  selectList: string[] = ['AAAAA', 'BBBBB', 'CCCCC', 'DDDDD', 'EEEEE'];

  constructor() { }

  ngOnInit() {
  }

}
