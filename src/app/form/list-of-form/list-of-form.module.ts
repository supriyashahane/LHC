import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfFormComponent } from './list-of-form.component';
import { ListOfFormRoutingModule } from './list-of-form-routing.module';
import { FormsListModule } from './forms-list/forms-list.module';

@NgModule({
  imports: [CommonModule, ListOfFormRoutingModule, FormsListModule],
  declarations: [ListOfFormComponent]
})
export class ListOfFormModule {}
