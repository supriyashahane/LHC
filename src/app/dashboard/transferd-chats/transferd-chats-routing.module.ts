import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { TransferdChatsComponent } from './transferd-chats.component';

const routes: Routes = [
  { path: 'transferdchats', component: TransferdChatsComponent, data: { title: extract('TransferdChats') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TransferdChatsRoutingModule {}
