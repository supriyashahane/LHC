import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewQueComponent } from './new-que.component';

const routes: Routes = [{ path: 'newque', component: NewQueComponent, data: { title: extract('NewQue') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewQueRoutingModule {}
