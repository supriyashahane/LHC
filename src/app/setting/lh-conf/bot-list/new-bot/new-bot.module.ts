import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBotComponent } from './new-bot.component';
import { NewBotRoutingModule } from './new-bot-routing.module';

@NgModule({
  imports: [CommonModule, NewBotRoutingModule],
  declarations: [NewBotComponent]
})
export class NewBotModule {}
