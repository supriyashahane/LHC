import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechLangComponent } from './speech-lang.component';
import { SpeechLangRoutingModule } from './speech-lang-routing.module';

@NgModule({
  imports: [CommonModule, SpeechLangRoutingModule],
  declarations: [SpeechLangComponent]
})
export class SpeechLangModule {}
