import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCustomInputComponent } from './select-custom-input/select-custom-input.component';
import { RouterModule } from '@angular/router';
import { ComponentsRoutingModule } from './component-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatFormFieldModule, MatChipsModule, MatRippleModule, MatMenuModule, MatButtonToggleModule, MatProgressSpinnerModule, MatSidenavModule, MatCardModule, MatListModule, MatCheckboxModule, MatTabsModule, MatDialogModule, MatTooltipModule, MatDatepickerModule, MatSnackBarModule, MatAutocompleteModule, MatOptionModule, MatRadioModule, MatExpansionModule, MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule } from '@angular/material';
import { SelectCustomTriggerComponent } from './select-custom-trigger/select-custom-trigger.component';
import { AutofocusDirective } from '../directive/auto-focus.directive';
import { FormComponent } from './form/form.component';
import { CdkTableModule } from '@angular/cdk/table';
import { TranslateModule } from '@ngx-translate/core';


const materialModules = [
  MatSelectModule,
  MatChipsModule,
  MatButtonModule,
  MatIconModule,
  MatRippleModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatCheckboxModule,
  MatTabsModule,
  MatDialogModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatExpansionModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatTableModule,
  CdkTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatToolbarModule
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    ...materialModules
  ],
  exports: [
    CommonModule,
    RouterModule,
    ComponentsRoutingModule,
    ReactiveFormsModule,
    ...materialModules
  ],
  declarations: [
    SelectCustomInputComponent,
    SelectCustomTriggerComponent,
    AutofocusDirective,
    FormComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {

}
