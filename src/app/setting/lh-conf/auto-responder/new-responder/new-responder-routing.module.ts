import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewResponderComponent } from './new-responder.component';

const routes: Routes = [
  { path: 'newresponder', component: NewResponderComponent, data: { title: extract('NewResponder') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewResponderRoutingModule {}
