import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { FormsListComponent } from './forms-list.component';

const routes: Routes = [{ path: 'formslist', component: FormsListComponent, data: { title: extract('FormsList') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsListRoutingModule {}
