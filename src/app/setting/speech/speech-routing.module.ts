import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { SpeechComponent } from './speech.component';

const routes: Routes = [{ path: 'speech', component: SpeechComponent, data: { title: extract('Speech') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SpeechRoutingModule {}
