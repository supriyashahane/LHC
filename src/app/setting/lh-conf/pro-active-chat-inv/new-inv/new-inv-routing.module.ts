import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewInvComponent } from './new-inv.component';

const routes: Routes = [{ path: 'newinv', component: NewInvComponent, data: { title: extract('NewInv') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewInvRoutingModule {}
