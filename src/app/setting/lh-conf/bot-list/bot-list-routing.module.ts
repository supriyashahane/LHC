import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { BotListComponent } from './bot-list.component';

const routes: Routes = [{ path: 'botlist', component: BotListComponent, data: { title: extract('BotList') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BotListRoutingModule {}
