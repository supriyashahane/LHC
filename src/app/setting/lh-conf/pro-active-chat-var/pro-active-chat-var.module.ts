import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProActiveChatVarComponent } from './pro-active-chat-var.component';
import { ProActiveChatVarRoutingModule } from './pro-active-chat-var-routing.module';
import { NewVarModule } from './new-var/new-var.module';
@NgModule({
  imports: [CommonModule, ProActiveChatVarRoutingModule, NewVarModule],
  declarations: [ProActiveChatVarComponent]
})
export class ProActiveChatVarModule {}
