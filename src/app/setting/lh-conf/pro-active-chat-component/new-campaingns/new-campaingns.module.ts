import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCampaingnsComponent } from './new-campaingns.component';
import { NewCampaingnsRoutingModule } from './new-campaingns-routing.module';
@NgModule({
  imports: [CommonModule, NewCampaingnsRoutingModule],
  declarations: [NewCampaingnsComponent]
})
export class NewCampaingnsModule {}
