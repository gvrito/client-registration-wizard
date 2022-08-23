import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { keyToText, ROUTES } from 'src/app/shared/core/constants';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent implements OnInit {
  userData: any;
  Object = Object;
  keyToText = keyToText as any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!history.state || Object.keys(history.state).length <= 1) {
      this.router.navigate([ROUTES.clientForm]);
    }
    this.userData = history.state;
  }

}
