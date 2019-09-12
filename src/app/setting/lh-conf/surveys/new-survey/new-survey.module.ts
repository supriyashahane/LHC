import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSurveyComponent } from './new-survey.component';
import { NewSurveyRoutingModule } from './new-survey-routing.module';

@NgModule({
  imports: [CommonModule, NewSurveyRoutingModule],
  declarations: [NewSurveyComponent]
})
export class NewSurveyModule {}
