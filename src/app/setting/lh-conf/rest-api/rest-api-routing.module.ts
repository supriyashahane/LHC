import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { RestApiComponent } from './rest-api.component';

const routes: Routes = [{ path: 'restapi', component: RestApiComponent, data: { title: extract('RestApi') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RestApiRoutingModule {}
