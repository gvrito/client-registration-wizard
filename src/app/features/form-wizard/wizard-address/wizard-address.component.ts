import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/shared/services/form.service';

@Component({
  selector: 'app-wizard-address',
  templateUrl: './wizard-address.component.html',
  styleUrls: ['./wizard-address.component.scss']
})
export class WizardAddressComponent implements OnInit {
  public form: FormGroup = new FormGroup({});

  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.form = this.formService.addressStepForm;
  }

}
