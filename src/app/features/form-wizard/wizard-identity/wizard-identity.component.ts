import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WizardStepBase } from 'src/app/shared/components/wizard-step-base';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-wizard-identity',
  templateUrl: './wizard-identity.component.html',
  styleUrls: ['./wizard-identity.component.scss']
})
export class WizardIdentityComponent extends WizardStepBase{
  constructor(
    route: ActivatedRoute,
    formService: FormService
  ) {
    super(route, formService);
  }

}
