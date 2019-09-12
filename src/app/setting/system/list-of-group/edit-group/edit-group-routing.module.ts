import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { EditGroupComponent } from './edit-group.component';

const routes: Routes = [{ path: 'editgroup', component: EditGroupComponent, data: { title: extract('EditGroup') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EditGroupRoutingModule {}
