import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechComponent } from './speech.component';
import { SpeechRoutingModule } from './speech-routing.module';
import { LanguagesModule } from './languages/languages.module';
import { SpeechLangModule } from './speech-lang/speech-lang.module';
import { DialectsModule } from './dialects/dialects.module';

@NgModule({
  imports: [CommonModule, SpeechRoutingModule, LanguagesModule, SpeechLangModule, DialectsModule],
  declarations: [SpeechComponent]
})
export class SpeechModule {}
