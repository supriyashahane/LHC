import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { UserActionComponent } from './user-action.component';

const routes: Routes = [{ path: 'useraction', component: UserActionComponent, data: { title: extract('UserAction') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserActionRoutingModule {}
