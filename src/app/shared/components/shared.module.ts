import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatToolbarModule
    ],
    exports: [
        FileUploadComponent
    ],
    declarations: [
        FileUploadComponent
    ],
    providers: [],
})
export class SharedModule { }
