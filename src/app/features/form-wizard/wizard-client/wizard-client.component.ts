import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { DROPDOWNS, LIMITS } from 'src/app/shared/core/constants';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-wizard-client',
  templateUrl: './wizard-client.component.html',
  styleUrls: ['./wizard-client.component.scss']
})
export class WizardClientComponent implements OnInit {
  public form: UntypedFormGroup = new UntypedFormGroup({});
  public dropdowns = DROPDOWNS;
  public LIMITS = LIMITS;

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.form = this.formService.clientStepForm;
  }
}
