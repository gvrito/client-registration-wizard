import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  public get canActivateAddress(): boolean {
    return true;
  }

  public get canActivateClient(): boolean {
    return false;
  }

  public get canActivateIdentity(): boolean {
    return true;
  }

}
