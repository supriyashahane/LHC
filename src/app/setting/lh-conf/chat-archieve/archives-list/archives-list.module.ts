import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesListComponent } from './archives-list.component';
import { ArchivesListRoutingModule } from './archives-list-routing.module';

@NgModule({
  imports: [CommonModule, ArchivesListRoutingModule],
  declarations: [ArchivesListComponent]
})
export class ArchivesListModule {}
