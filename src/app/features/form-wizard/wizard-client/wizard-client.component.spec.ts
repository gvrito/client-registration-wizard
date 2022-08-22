import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardClientComponent } from './wizard-client.component';

describe('WizardClientComponent', () => {
  let component: WizardClientComponent;
  let fixture: ComponentFixture<WizardClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
