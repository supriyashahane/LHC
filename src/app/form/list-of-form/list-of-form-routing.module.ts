import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ListOfFormComponent } from './list-of-form.component';

const routes: Routes = [{ path: 'listofform', component: ListOfFormComponent, data: { title: extract('ListOfForm') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListOfFormRoutingModule {}
