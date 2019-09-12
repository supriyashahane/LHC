import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DialectsComponent } from './dialects.component';

const routes: Routes = [{ path: 'dialects', component: DialectsComponent, data: { title: extract('Dialects') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DialectsRoutingModule {}
