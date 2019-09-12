import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { SpeechLangComponent } from './speech-lang.component';

const routes: Routes = [{ path: 'speechlang', component: SpeechLangComponent, data: { title: extract('SpeechLang') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SpeechLangRoutingModule {}
