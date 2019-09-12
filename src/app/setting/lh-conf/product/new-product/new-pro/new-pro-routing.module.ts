import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewProComponent } from './new-pro.component';

const routes: Routes = [{ path: 'newpro', component: NewProComponent, data: { title: extract('NewPro') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewProRoutingModule {}
