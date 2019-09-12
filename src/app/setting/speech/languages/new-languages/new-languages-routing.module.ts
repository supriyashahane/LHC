import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewLanguagesComponent } from './new-languages.component';

const routes: Routes = [
  { path: 'newlanguages', component: NewLanguagesComponent, data: { title: extract('NewLanguages') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewLanguagesRoutingModule {}
