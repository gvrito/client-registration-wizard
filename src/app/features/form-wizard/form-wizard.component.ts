import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'src/app/shared/core/constants';

@Component({
  selector: 'app-form-wizard',
  templateUrl: './form-wizard.component.html',
  styleUrls: ['./form-wizard.component.scss']
})
export class FormWizardComponent implements OnInit {
  public ROUTES = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
