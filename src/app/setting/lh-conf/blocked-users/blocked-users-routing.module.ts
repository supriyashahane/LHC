import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { BlockedUsersComponent } from './blocked-users.component';

const routes: Routes = [
  { path: 'blockedusers', component: BlockedUsersComponent, data: { title: extract('BlockedUsers') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BlockedUsersRoutingModule {}
