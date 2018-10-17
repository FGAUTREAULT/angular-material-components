import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCustomInputComponent } from './select-custom-input/select-custom-input.component';
import { RouterModule } from '@angular/router';
import { ComponentsRoutingModule } from './component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsRoutingModule
  ],
  declarations: [
    SelectCustomInputComponent
  ],
  entryComponents: [
    SelectCustomInputComponent
  ]
})
export class ComponentsModule {

}
