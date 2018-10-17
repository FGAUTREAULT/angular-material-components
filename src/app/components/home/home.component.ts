import { Component, OnInit } from '@angular/core';
import { ROUTING_HOME, ROUTING_COMPONENT } from 'src/app/core/constants/routing.constants';
import { COMPONENT_SELECT_CUSTOM_INPUT } from 'src/app/core/constants/components-name.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ROUTING_COMPONENT = ROUTING_COMPONENT;
  COMPONENT_SELECT_CUSTOM_INPUT = COMPONENT_SELECT_CUSTOM_INPUT;

  constructor() { }

  ngOnInit() {
  }

}
