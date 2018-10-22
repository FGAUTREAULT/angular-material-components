import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomTriggerComponent } from './select-custom-trigger.component';
import { ComponentsModule } from '../components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SelectCustomTriggerComponent', () => {
  let component: SelectCustomTriggerComponent;
  let fixture: ComponentFixture<SelectCustomTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        ComponentsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
