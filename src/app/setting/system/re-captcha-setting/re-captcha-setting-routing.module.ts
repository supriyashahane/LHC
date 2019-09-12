import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ReCaptchaSettingComponent } from './re-captcha-setting.component';

const routes: Routes = [
  { path: 'recaptchasetting', component: ReCaptchaSettingComponent, data: { title: extract('ReCaptchaSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ReCaptchaSettingRoutingModule {}
