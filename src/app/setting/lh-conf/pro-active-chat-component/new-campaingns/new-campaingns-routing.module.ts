import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewCampaingnsComponent } from './new-campaingns.component';

const routes: Routes = [
  { path: 'newcampaingns', component: NewCampaingnsComponent, data: { title: extract('NewCampaingns') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewCampaingnsRoutingModule {}
