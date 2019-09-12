import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatArchieveComponent } from './chat-archieve.component';
import { ChatArchieveRoutingModule } from './chat-archieve-routing.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { ArchivesListModule } from './archives-list/archives-list.module';
import { NewArchiveModule } from './new-archive/new-archive.module';
@NgModule({
  imports: [CommonModule, ChatArchieveRoutingModule, ConfigurationModule, ArchivesListModule, NewArchiveModule],
  declarations: [ChatArchieveComponent]
})
export class ChatArchieveModule {}
