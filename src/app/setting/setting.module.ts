import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { SystemModule } from './system/system.module';
import { SpeechModule } from './speech/speech.module';
import { EmbedCodeModule } from './embed-code/embed-code.module';
import { LHConfModule } from './lh-conf/lh-conf.module';

@NgModule({
  imports: [CommonModule, SettingRoutingModule, SystemModule, SpeechModule, EmbedCodeModule, LHConfModule],
  declarations: [SettingComponent]
})
export class SettingModule {}
