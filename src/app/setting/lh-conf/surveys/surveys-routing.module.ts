import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { SurveysComponent } from './surveys.component';

const routes: Routes = [{ path: 'surveys', component: SurveysComponent, data: { title: extract('Surveys') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SurveysRoutingModule {}
