import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriberListComponent } from './subscriber-list.component';
import { SubscriberListRoutingModule } from './subscriber-list-routing.module';

@NgModule({
  imports: [CommonModule, SubscriberListRoutingModule],
  declarations: [SubscriberListComponent]
})
export class SubscriberListModule {}
