import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxListComponent } from './chat-box-list.component';
import { ChatBoxListRoutingModule } from './chat-box-list-routing.module';
import { NewNameModule } from './new-name/new-name.module';
import { PageEmbedCodeModule } from './page-embed-code/page-embed-code.module';
import { WidgetEmbedModule } from './widget-embed/widget-embed.module';

@NgModule({
  imports: [CommonModule, ChatBoxListRoutingModule, NewNameModule, PageEmbedCodeModule, WidgetEmbedModule],
  declarations: [ChatBoxListComponent]
})
export class ChatBoxListModule {}
