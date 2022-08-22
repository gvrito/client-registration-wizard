import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WizardStepBase } from 'src/app/shared/components/wizard-step-base';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-wizard-address',
  templateUrl: './wizard-address.component.html',
  styleUrls: ['./wizard-address.component.scss']
})
export class WizardAddressComponent extends WizardStepBase{
  constructor(
    route: ActivatedRoute,
    formService: FormService
  ) {
    super(route, formService);
  }

}
