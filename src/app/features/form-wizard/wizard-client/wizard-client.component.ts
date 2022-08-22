import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WizardStepBase } from 'src/app/shared/components/wizard-step-base';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-wizard-client',
  templateUrl: './wizard-client.component.html',
  styleUrls: ['./wizard-client.component.scss']
})
export class WizardClientComponent extends WizardStepBase {
  constructor(
    route: ActivatedRoute,
    formService: FormService
  ) {
    super(route, formService);
  }

}
