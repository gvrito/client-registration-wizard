import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES, WIZARD_STEPS } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // tslint:disable: variable-name
  private _clientStepForm: FormGroup = new FormGroup({});
  private _addressStepForm: FormGroup = new FormGroup({});
  private _identityStepForm: FormGroup = new FormGroup({});
  public currentStep = WIZARD_STEPS.Client;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public constructClientForm(): void {
    this._clientStepForm = this.fb.group({
      lastName: ['', { validators: [Validators.required] }],
      name: ['', { validators: [Validators.required] }],
      middleName: ['', {}],
      dateOfBirth: [null, { validators: [Validators.required] }],
      phone: [null, { validators: [Validators.required, Validators.maxLength(11)] }],
      gender: ['', {}],
      clientGroup: ['', { validators: [Validators.required] }],
      coordinator: ['', {}],
      noSms: [false, {}]
    });
  }

  public constructAddressForm(): void {
    this._addressStepForm = this.fb.group({
      country: ['', { validators: [Validators.required] }],
      area: [''],
      city: ['', { validators: [Validators.required] }],
      street: [''],
      house: ['']
    });
  }

  public constructIdentityForm(): void {
    this._identityStepForm = this.fb.group({
      documentType: ['', { validators: [Validators.required] }],
      series: [''],
      number: ['', { validators: [Validators.required] }],
      issuedBy: [''],
      dateOfIssue: [null, { validators: [Validators.required] }],
      fileAttachment: [null]
    });
  }

  public nextStep(): void {
    switch (this.currentStep) {
      case WIZARD_STEPS.Client:
        if (this.canActivateAddress) {
          this.router.navigate([ROUTES.address], { relativeTo: this.route });
          this.currentStep = WIZARD_STEPS.Address;
        }
        break;
      case WIZARD_STEPS.Address:
        if (this.canActivateIdentity) {
          this.router.navigate([ROUTES.identity], { relativeTo: this.route });
          this.currentStep = WIZARD_STEPS.Identity;
        }
        break;
    }
  }

  public prevStep(): void {
    switch (this.currentStep) {
      case WIZARD_STEPS.Address:
        this.router.navigate([ROUTES.client], { relativeTo: this.route });
        this.currentStep = WIZARD_STEPS.Client;
        break;
      case WIZARD_STEPS.Identity:
        this.router.navigate([ROUTES.address], { relativeTo: this.route });
        this.currentStep = WIZARD_STEPS.Address;
        break;
    }
  }

  public get clientStepForm(): FormGroup {
    return this._clientStepForm;
  }

  public get addressStepForm(): FormGroup {
    return this._addressStepForm;
  }

  public get identityStepForm(): FormGroup {
    return this._identityStepForm;
  }

  public get canActivateAddress(): boolean {
    return this.clientStepForm.valid;
  }

  public get canActivateIdentity(): boolean {
    return this.addressStepForm.valid;
  }

}
