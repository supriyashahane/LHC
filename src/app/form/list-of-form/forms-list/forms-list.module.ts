import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsListComponent } from './forms-list.component';
import { FormsListRoutingModule } from './forms-list-routing.module';

@NgModule({
  imports: [CommonModule, FormsListRoutingModule],
  declarations: [FormsListComponent]
})
export class FormsListModule {}
