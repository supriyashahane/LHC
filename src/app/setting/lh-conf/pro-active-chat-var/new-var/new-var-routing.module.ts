import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewVarComponent } from './new-var.component';

const routes: Routes = [{ path: 'newvar', component: NewVarComponent, data: { title: extract('NewVar') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewVarRoutingModule {}
