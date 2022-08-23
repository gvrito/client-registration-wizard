import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  currentFile?: File;
  fileName = 'Select File';
  uploading = false;
  constructor(
    private uploadService: FileUploadService
  ) { }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  upload(): void {
    if (this.currentFile) {
      this.uploading = true;
      this.uploadService.upload(this.currentFile)
      .pipe(
        finalize(() => {
          this.uploading = false;
        })
      )
      .subscribe();
    }
  }

}
