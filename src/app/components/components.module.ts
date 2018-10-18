import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCustomInputComponent } from './select-custom-input/select-custom-input.component';
import { RouterModule } from '@angular/router';
import { ComponentsRoutingModule } from './component-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { SelectCustomTriggerComponent } from './select-custom-trigger/select-custom-trigger.component';
import { AutofocusDirective } from '../directive/auto-focus.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  declarations: [
    SelectCustomInputComponent,
    SelectCustomTriggerComponent,
    AutofocusDirective
  ],
  entryComponents: [
  ]
})
export class ComponentsModule {

}
