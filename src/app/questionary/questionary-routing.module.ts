import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { QuestionaryComponent } from './questionary.component';

const routes: Routes = [{ path: '', component: QuestionaryComponent, data: { title: extract('Questionary') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class QuestionaryRoutingModule {}
