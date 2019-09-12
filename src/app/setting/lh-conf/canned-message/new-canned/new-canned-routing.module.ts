import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewCannedComponent } from './new-canned.component';

const routes: Routes = [{ path: 'newcanned', component: NewCannedComponent, data: { title: extract('NewCanned') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewCannedRoutingModule {}
