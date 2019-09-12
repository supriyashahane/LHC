import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { AutoResponderComponent } from './auto-responder.component';

const routes: Routes = [
  { path: 'autoresponder', component: AutoResponderComponent, data: { title: extract('AutoResponder') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AutoResponderRouterModule {}
