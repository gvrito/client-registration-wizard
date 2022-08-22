import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // tslint:disable: variable-name
  private _clientStepForm: FormGroup = new FormGroup({});
  private _addressStepForm: FormGroup = new FormGroup({});
  private _identityStepForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) { }

  public constructClientForm(): void {
    this._clientStepForm = this.fb.group({
      lastName: ['', { validators: [Validators.required] }],
      name: ['', { validators: [Validators.required] }],
      middleName: [''],
      dateOfBirth: [null, { validators: [Validators.required] }],
      phone: [null, { validators: [Validators.required, Validators.maxLength(11)] }],
      gender: [''],
      clientGroup: ['', { validators: [Validators.required] }],
      coordinator: [''],
      noSms: [false]
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
    return this.addressStepForm?.valid;
  }

  public get canActivateClient(): boolean {
    return this.clientStepForm?.valid;
  }

  public get canActivateIdentity(): boolean {
    return this.identityStepForm?.valid;
  }

}
