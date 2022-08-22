import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/app/shared/core/constants';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {
  public ROUTES = ROUTES;

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.initForms();
  }

  private initForms(): void {
    this.formService.constructAddressForm();
    this.formService.constructClientForm();
    this.formService.constructIdentityForm();
  }

}
