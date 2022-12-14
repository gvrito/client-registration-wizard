import { Component } from '@angular/core';
import { ROUTES, WIZARD_STEPS } from 'src/app/shared/core/constants';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent {
  public ROUTES = ROUTES;

  constructor(
    private formService: FormService
  ) { }


  public onNextClick(): void {
    if (this.showNext) {
      this.formService.nextStep();
    }
  }

  public onPreviousClick(): void {
    if (this.showPrevious) {
      this.formService.prevStep();
    }
  }

  public onFinalClick(): void {
    if (this.showFinal) {
      this.formService.createClient();
    }
  }

  public get isClientValid(): boolean {
    return this.formService.clientStepForm.valid;
  }

  public get isAddressValid(): boolean {
    return this.formService.addressStepForm.valid;
  }

  public get isIdentityValid(): boolean {
    return this.formService.identityStepForm.valid;
  }

  public get showPrevious(): boolean {
    return this.formService.currentStep !== WIZARD_STEPS.Client;
  }

  public get showNext(): boolean {
    return this.formService.currentStep !== WIZARD_STEPS.Identity;
  }

  public get showFinal(): boolean {
    return this.formService.currentStep === WIZARD_STEPS.Identity;
  }

}
