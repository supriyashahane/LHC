import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesConfigComponent } from './files-config.component';
import { FilesConfigRoutingModule } from './files-config-routing.module';

@NgModule({
  imports: [CommonModule, FilesConfigRoutingModule],
  declarations: [FilesConfigComponent]
})
export class FilesConfigModule {}
