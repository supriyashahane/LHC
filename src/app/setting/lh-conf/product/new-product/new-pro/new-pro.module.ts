import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProComponent } from './new-pro.component';
import { NewProRoutingModule } from './new-pro-routing.module';

@NgModule({
  imports: [CommonModule, NewProRoutingModule],
  declarations: [NewProComponent]
})
export class NewProModule {}
