import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewSurveyComponent } from './new-survey.component';

const routes: Routes = [{ path: 'newsurvey', component: NewSurveyComponent, data: { title: extract('NewSurvey') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewSurveyRoutingModule {}
