import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardAddressComponent } from './wizard-address.component';

describe('WizardAddressComponent', () => {
  let component: WizardAddressComponent;
  let fixture: ComponentFixture<WizardAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
