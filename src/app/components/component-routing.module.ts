import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectCustomInputComponent } from './select-custom-input/select-custom-input.component';
import { ROUTING_HOME } from '../core/constants/routing.constants';
import { COMPONENT_SELECT_CUSTOM_INPUT, COMPONENT_SELECT_CUSTOM_TRIGGER } from '../core/constants/components-name.constants';
import { SelectCustomTriggerComponent } from './select-custom-trigger/select-custom-trigger.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/' + ROUTING_HOME
      },
      {
        path: COMPONENT_SELECT_CUSTOM_INPUT,
        component: SelectCustomInputComponent
      },
      {
        path: COMPONENT_SELECT_CUSTOM_TRIGGER,
        component: SelectCustomTriggerComponent
      }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class ComponentsRoutingModule {
}
