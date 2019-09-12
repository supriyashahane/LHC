import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEventComponent } from './new-event.component';
import { NewEventRoutingModule } from './new-event-routing.module';

@NgModule({
  imports: [CommonModule, NewEventRoutingModule],
  declarations: [NewEventComponent]
})
export class NewEventModule {}
