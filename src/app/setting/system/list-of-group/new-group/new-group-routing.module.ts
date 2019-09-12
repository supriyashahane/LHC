import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewGroupComponent } from './new-group.component';

const routes: Routes = [{ path: 'newgroup', component: NewGroupComponent, data: { title: extract('NewGroup') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewGroupRoutingModule {}
