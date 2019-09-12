import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewListchatComponent } from './new-listchat.component';

const routes: Routes = [
  { path: 'newlistchat', component: NewListchatComponent, data: { title: extract('NewListchat') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewListchatRoutingModule {}
