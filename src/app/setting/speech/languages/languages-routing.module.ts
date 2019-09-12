import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { LanguagesComponent } from './languages.component';

const routes: Routes = [{ path: 'languages', component: LanguagesComponent, data: { title: extract('Languages') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LanguagesRoutingModule {}
