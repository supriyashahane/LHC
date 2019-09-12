import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { AutoTranslationComponent } from './auto-translation.component';

const routes: Routes = [
  { path: 'autotranslation', component: AutoTranslationComponent, data: { title: extract('AutoTranslation') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AutoTranslationRoutingModule {}
