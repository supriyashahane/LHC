import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewRoleComponent } from './new-role.component';

const routes: Routes = [{ path: 'newrole', component: NewRoleComponent, data: { title: extract('NewRole') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewRoleRoutingModule {}
