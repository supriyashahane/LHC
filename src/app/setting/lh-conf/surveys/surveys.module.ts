import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveysComponent } from './surveys.component';
import { SurveysRoutingModule } from './surveys-routing.module';
import { NewSurveyModule } from './new-survey/new-survey.module';

@NgModule({
  imports: [CommonModule, SurveysRoutingModule, NewSurveyModule],
  declarations: [SurveysComponent]
})
export class SurveysModule {}
