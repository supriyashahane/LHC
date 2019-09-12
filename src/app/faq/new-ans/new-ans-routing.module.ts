import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewAnsComponent } from './new-ans.component';

const routes: Routes = [{ path: 'newans', component: NewAnsComponent, data: { title: extract('NewAns') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewAnsRoutingModule {}
