import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DROPDOWNS } from 'src/app/shared/core/constants';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-wizard-identity',
  templateUrl: './wizard-identity.component.html',
  styleUrls: ['./wizard-identity.component.scss']
})
export class WizardIdentityComponent implements OnInit {
  public form: UntypedFormGroup = new UntypedFormGroup({});
  public dropdowns = DROPDOWNS;

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.form = this.formService.identityStepForm;
  }
}
