import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardIdentityComponent } from './wizard-identity.component';

describe('WizardIdentityComponent', () => {
  let component: WizardIdentityComponent;
  let fixture: ComponentFixture<WizardIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
