import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES, WIZARD_STEPS } from 'src/app/shared/core/constants';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {
  public ROUTES = ROUTES;

  constructor(
    private formService: FormService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForms();
    this.router.navigate([ROUTES.client], { relativeTo: this.route });
  }

  private initForms(): void {
    this.formService.constructAddressForm();
    this.formService.constructClientForm();
    this.formService.constructIdentityForm();
  }

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

  public get showPrevious(): boolean {
    return this.formService.currentStep !== WIZARD_STEPS.Client;
  }

  public get showNext(): boolean {
    return this.formService.currentStep !== WIZARD_STEPS.Identity;
  }

}
