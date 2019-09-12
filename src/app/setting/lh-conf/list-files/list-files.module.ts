import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilesComponent } from './list-files.component';
import { UploadFileModule } from './upload-file/upload-file.module';
import { ListFilesRoutingModule } from './list-files-routing.module';

@NgModule({
  imports: [CommonModule, UploadFileModule, ListFilesRoutingModule],
  declarations: [ListFilesComponent]
})
export class ListFilesModule {}
