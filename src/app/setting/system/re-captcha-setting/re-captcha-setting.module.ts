import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReCaptchaSettingComponent } from './re-captcha-setting.component';
import { ReCaptchaSettingRoutingModule } from './re-captcha-setting-routing.module';

@NgModule({
  imports: [CommonModule, ReCaptchaSettingRoutingModule],
  declarations: [ReCaptchaSettingComponent]
})
export class ReCaptchaSettingModule {}
