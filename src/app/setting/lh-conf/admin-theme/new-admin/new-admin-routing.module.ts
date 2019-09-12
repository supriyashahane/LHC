import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewAdminComponent } from './new-admin.component';

const routes: Routes = [{ path: 'newadmin', component: NewAdminComponent, data: { title: extract('NewAdmin') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewAdminRoutingModule {}
