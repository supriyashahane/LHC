import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineVisitorsComponent } from './online-visitors.component';
import { OnlineVisitorsRoutingModule } from './online-visitors-routing.module';

@NgModule({
  imports: [CommonModule, OnlineVisitorsRoutingModule],
  declarations: [OnlineVisitorsComponent]
})
export class OnlineVisitorsModule {}
