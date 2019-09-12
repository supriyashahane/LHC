import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewListchatComponent } from './new-listchat.component';
import { NewListchatRoutingModule } from './new-listchat-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, NewListchatRoutingModule, MatTabsModule],
  declarations: [NewListchatComponent]
})
export class NewListchatModule {}
