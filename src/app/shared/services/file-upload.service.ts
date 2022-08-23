import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  public uploadedFile: any;

  constructor() { }

  public upload(file: File): Observable<File> {
    this.uploadedFile = file;
    return of(file);
  }

}
