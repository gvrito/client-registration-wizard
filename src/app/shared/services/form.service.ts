import { Injectable } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ROUTES, WIZARD_STEPS } from '../core/constants';
import { FileUploadService } from './file-upload.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // tslint:disable: variable-name
  private _clientStepForm: UntypedFormGroup = new UntypedFormGroup({});
  private _addressStepForm: UntypedFormGroup = new UntypedFormGroup({});
  private _identityStepForm: UntypedFormGroup = new UntypedFormGroup({});
  public currentStep = WIZARD_STEPS.Client;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private upload: FileUploadService,
    private toastr: ToastrService
  ) {
    this.constructAddressForm();
    this.constructClientForm();
    this.constructIdentityForm();
  }

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
      index: [''],
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
        this.clientStepForm.markAllAsTouched();
        if (this.canActivateAddress) {
          this.router.navigate([ROUTES.clientForm, ROUTES.address]);
          this.currentStep = WIZARD_STEPS.Address;
        }
        break;
      case WIZARD_STEPS.Address:
        this.addressStepForm.markAllAsTouched();
        if (this.canActivateIdentity) {
          this.router.navigate([ROUTES.clientForm, ROUTES.identity]);
          this.currentStep = WIZARD_STEPS.Identity;
        }
        break;
    }
  }

  public prevStep(): void {
    switch (this.currentStep) {
      case WIZARD_STEPS.Address:
        this.router.navigate([ROUTES.clientForm, ROUTES.client]);
        this.currentStep = WIZARD_STEPS.Client;
        break;
      case WIZARD_STEPS.Identity:
        this.router.navigate([ROUTES.clientForm, ROUTES.address]);
        this.currentStep = WIZARD_STEPS.Address;
        break;
    }
  }

  public createClient(): void {
    this.identityStepForm.markAllAsTouched();
    if (this.addressStepForm.valid && this.clientStepForm.valid && this.identityStepForm.valid) {
      const data = {
        ...this.clientStepForm.value,
        ...this.addressStepForm.value,
        ...this.identityStepForm.value,
        fileAttachment: this.upload.uploadedFile,
        clientGroup: this.clientStepForm.value.clientGroup.join(', ')
      };
      this.toastr.success('Client successfully created');
      this.router.navigate([ROUTES.clientInfo], { state: data});
    }
  }

  public get clientStepForm(): UntypedFormGroup {
    return this._clientStepForm;
  }

  public get addressStepForm(): UntypedFormGroup {
    return this._addressStepForm;
  }

  public get identityStepForm(): UntypedFormGroup {
    return this._identityStepForm;
  }

  public get canActivateAddress(): boolean {
    return this.clientStepForm.valid;
  }

  public get canActivateIdentity(): boolean {
    return this.addressStepForm.valid;
  }

}
