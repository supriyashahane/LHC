import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { MaintanceComponent } from './maintance.component';

const routes: Routes = [{ path: 'maintance', component: MaintanceComponent, data: { title: extract('Maintance') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MaintanceRoutingModule {}
