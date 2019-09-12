import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewNameComponent } from './new-name.component';

const routes: Routes = [{ path: 'newname', component: NewNameComponent, data: { title: extract('NewName') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewNameRoutingModule {}
