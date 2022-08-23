import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { DROPDOWNS } from 'src/app/shared/core/constants';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-wizard-address',
  templateUrl: './wizard-address.component.html',
  styleUrls: ['./wizard-address.component.scss']
})
export class WizardAddressComponent implements OnInit {
  public form: UntypedFormGroup = new UntypedFormGroup({});
  public dropdowns = DROPDOWNS;

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.form = this.formService.addressStepForm;
  }

}
