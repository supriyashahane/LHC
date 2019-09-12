import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CannedMessageComponent } from './canned-message.component';
import { CannedMessageRoutingModule } from './canned-message-routing.module';
import { NewCannedModule } from './new-canned/new-canned.module';

@NgModule({
  imports: [CommonModule, CannedMessageRoutingModule, NewCannedModule],
  declarations: [CannedMessageComponent]
})
export class CannedMessageModule {}
