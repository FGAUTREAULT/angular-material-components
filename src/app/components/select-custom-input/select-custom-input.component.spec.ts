import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SelectCustomInputComponent } from './select-custom-input.component';
import { ComponentsModule } from '../components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';

describe('SelectCustomInputComponent', () => {
  let component: SelectCustomInputComponent;
  let fixture: ComponentFixture<SelectCustomInputComponent>;

  const modelMock = [{
    key: 'AAAAA',
    value: 1,
    translationKey: 'LEVEL.LOW'
  },
  {
    key: 'BBBBB',
    value: 2,
    translationKey: 'LEVEL.MEDIUM'
  },
  {
    key: 'CCCCC',
    value: 3,
    translationKey: 'LEVEL.HIGH'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectCustomInputComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot()
      ]
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

  describe('ngOnInit', () => {
    it('Init component', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe((value) => {
        fail();
      });
      component.inputControl.valueChanges.subscribe((value) => {
        fail();
      });

      // WHEN
      component.ngOnInit();

      // THEN
      expect(component.selectSubscription.closed).toBe(false);
      expect(component.inputSubscription.closed).toBe(false);
    }));

    it('Init component - value input', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe(() => {
        fail();
      });
      component.inputControl.valueChanges.subscribe(() => {
        fail();
      });

      const value = '3';
      component.selectedValue = value;
      component.selectList = modelMock;

      // WHEN
      component.ngOnInit();
      fixture.detectChanges();

      // THEN
      expect(component.selectedValue).toBe(value);
    }));
  });

  describe('ngOnDestroy', () => {
    it('Init component', fakeAsync(() => {
      // GIVEN

      // WHEN
      component.ngOnDestroy();

      // THEN
      expect(component.selectSubscription.closed).toBe(true);
      expect(component.inputSubscription.closed).toBe(true);
    }));

  });

  describe('ngOnChanges', () => {
    it('Component changes - value', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe(() => {
        fail();
      });
      component.inputControl.valueChanges.subscribe(() => {
        fail();
      });

      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      spyOn(component, 'writeValue');
      const value = '4';
      const changes = {
        selectedValue: {
          currentValue: value
        }
      };

      // WHEN
      component.ngOnChanges(changes);

      // THEN
      expect(component.writeValue).toHaveBeenCalledWith(value);
    }));

    it('Component changes - other', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe(() => {
        fail();
      });
      component.inputControl.valueChanges.subscribe(() => {
        fail();
      });

      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      spyOn(component, 'writeValue');
      const value = '4';
      const changes = {
        other: {
          currentValue: value
        }
      };

      // WHEN
      component.ngOnChanges(changes);

      // THEN
      expect(component.writeValue).not.toHaveBeenCalled();
    }));
  });

  describe('emitChanges', () => {
    it('Component changes - value', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe(() => {
        fail();
      });
      component.inputControl.valueChanges.subscribe(() => {
        fail();
      });

      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      spyOn(component.valueChange, 'emit');
      const value = '4';

      // WHEN
      component.emitChanges(value);

      // THEN
      expect(component.valueChange.emit).toHaveBeenCalled();
    }));
  });

  describe('isCustomValue', () => {
    it('Component custom value - value null', fakeAsync(() => {
      // GIVEN
      const list = modelMock;
      const value = null;

      // WHEN
      const result = SelectCustomInputComponent.isCustomValue(value, list);

      // THEN
      expect(result).toBe(false);
    }));

    it('Component custom value - value undefined', fakeAsync(() => {
      // GIVEN
      const list = modelMock;
      const value = undefined;

      // WHEN
      const result = SelectCustomInputComponent.isCustomValue(value, list);

      // THEN
      expect(result).toBe(false);
    }));

    it('Component custom value - value \'\' ', fakeAsync(() => {
      // GIVEN
      const list = modelMock;
      const value = '';

      // WHEN
      const result = SelectCustomInputComponent.isCustomValue(value, list);

      // THEN
      expect(result).toBe(false);
    }));

    it('Component custom value - value in list', fakeAsync(() => {
      // GIVEN
      const list = modelMock;
      const value = '3';

      // WHEN
      const result = SelectCustomInputComponent.isCustomValue(value, list);

      // THEN
      expect(result).toBe(false);
    }));

    it('Component custom value - value out of list', fakeAsync(() => {
      // GIVEN
      const list = modelMock;
      const value = '4';

      // WHEN
      const result = SelectCustomInputComponent.isCustomValue(value, list);

      // THEN
      expect(result).toBe(true);
    }));
  });

  describe('onFocusOut', () => {
    it('Component focus out - with custom value', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe(() => {
        fail();
      });
      component.inputControl.valueChanges.subscribe(() => {
        fail();
      });

      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      const value = '4';

      // WHEN
      component.onFocusOut(value);

      // THEN
      expect(component.custom).toBe(true);
    }));

    it('Component focus out - with static value in list', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe((newValue) => {
        expect(newValue).toBe(value);
        expect(component.custom).toBe(false);
        expect(component.selectedValue).toBe(newValue);
        expect(component.valueChange.emit).toHaveBeenCalled();
      });
      component.inputControl.valueChanges.subscribe(() => {
        fail();
      });

      spyOn(component.valueChange, 'emit');
      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      const value = '2';

      // WHEN
      component.onFocusOut(value);

      // THEN
      expect(component.custom).toBe(false);
    }));

    it('Component focus out - with empty value', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe((newValue) => {
        expect(newValue).toBe(value);
        expect(component.custom).toBe(false);
        expect(component.selectedValue).toBe(newValue);
        expect(component.valueChange.emit).toHaveBeenCalled();
      });
      component.inputControl.valueChanges.subscribe(() => {
        fail();
      });

      spyOn(component.valueChange, 'emit');
      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      const value = '';

      // WHEN
      component.onFocusOut(value);

      // THEN
      expect(component.custom).toBe(false);
    }));
  });

  describe('writeValue', () => {
    it('Component write value - custom', fakeAsync(() => {
      // GIVEN
      component.selectControl.valueChanges.subscribe(() => {
        fail();
      });
      component.inputControl.valueChanges.subscribe(() => {
        fail();
      });

      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      const value = '4';

      // WHEN
      component.writeValue(value);

      // THEN
      expect(component.selectedValue).toBe(value);
      expect(component.custom).toBe(true);
    }));

    it('Component write value - NOT custom', fakeAsync(() => {
      // GIVEN
      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      const value = '3';

      // WHEN
      component.writeValue(value);

      // THEN
      expect(component.selectedValue).toBe(value);
      expect(component.custom).toBe(false);
    }));

    it('Component write value - empty', fakeAsync(() => {
      // GIVEN
      const currentValue = '3';
      component.selectedValue = currentValue;
      component.selectList = modelMock;

      const value = '';

      // WHEN
      component.writeValue(value);

      // THEN
      expect(component.selectedValue).toBe(value);
      expect(component.custom).toBe(false);
    }));
  });

});
