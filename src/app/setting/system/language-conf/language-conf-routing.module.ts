import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { LanguageConfComponent } from './language-conf.component';

const routes: Routes = [
  { path: 'languageconf', component: LanguageConfComponent, data: { title: extract('LanguageConf') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LanguageConfRoutingModule {}
