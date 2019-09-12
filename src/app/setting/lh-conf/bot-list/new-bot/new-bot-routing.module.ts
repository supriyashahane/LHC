import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewBotComponent } from './new-bot.component';

const routes: Routes = [{ path: 'newbot', component: NewBotComponent, data: { title: extract('NewBot') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewBotRoutingModule {}
