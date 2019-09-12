import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { MailSettingComponent } from './mail-setting.component';

const routes: Routes = [
  { path: 'mailsetting', component: MailSettingComponent, data: { title: extract('MailSetting') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MailSettingRoutingModule {}
