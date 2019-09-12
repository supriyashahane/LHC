import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotListComponent } from './bot-list.component';
import { BotListRoutingModule } from './bot-list-routing.module';
import { NewBotModule } from './new-bot/new-bot.module';

@NgModule({
  imports: [CommonModule, BotListRoutingModule, NewBotModule],
  declarations: [BotListComponent]
})
export class BotListModule {}
