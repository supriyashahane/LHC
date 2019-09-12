import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewArchiveComponent } from './new-archive.component';
import { NewArchiveRoutingModule } from './new-archive-routing.module';

@NgModule({
  imports: [CommonModule, NewArchiveRoutingModule],
  declarations: [NewArchiveComponent]
})
export class NewArchiveModule {}
