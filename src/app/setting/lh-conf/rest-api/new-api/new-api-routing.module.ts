import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewApiComponent } from './new-api.component';

const routes: Routes = [{ path: 'newapi', component: NewApiComponent, data: { title: extract('NewApi') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewApiRoutingModule {}
