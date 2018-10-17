import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCustomInputComponent } from './select-custom-input.component';

describe('SelectCustomInputComponent', () => {
  let component: SelectCustomInputComponent;
  let fixture: ComponentFixture<SelectCustomInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
