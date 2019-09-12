import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewNameComponent } from './new-name.component';
import { NewNameRoutingModule } from './new-name-routing.module';

@NgModule({
  imports: [CommonModule, NewNameRoutingModule],
  declarations: [NewNameComponent]
})
export class NewNameModule {}
