import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewDialectsComponent } from './new-dialects.component';

const routes: Routes = [
  { path: 'newdialects', component: NewDialectsComponent, data: { title: extract('NewDialects') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewDialectsRoutingModule {}
