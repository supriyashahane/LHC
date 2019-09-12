import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { EditRoleComponent } from './edit-role.component';

const routes: Routes = [{ path: 'editrole', component: EditRoleComponent, data: { title: extract('EditRole') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EditRoleRoutingModule {}
