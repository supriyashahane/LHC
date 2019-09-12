import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsListComponent } from './visitors-list.component';
import { VisitorsListRoutingModule } from './visitors-list-routing.module';

@NgModule({
  imports: [CommonModule, VisitorsListRoutingModule],
  declarations: [VisitorsListComponent]
})
export class VisitorsListModule {}
