import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system-routing.module';
import { AutoLoginModule } from './auto-login/auto-login.module';
import { CleanCacheModule } from './clean-cache/clean-cache.module';
import { EMailTemplateModule } from './e-mail-template/e-mail-template.module';
import { ImportValueModule } from './import-value/import-value.module';
import { LanguageConfModule } from './language-conf/language-conf.module';
import { ListOfGroupModule } from './list-of-group/list-of-group.module';
import { ListOfRolesModule } from './list-of-roles/list-of-roles.module';
import { MailSettingModule } from './mail-setting/mail-setting.module';
import { ReCaptchaSettingModule } from './re-captcha-setting/re-captcha-setting.module';
import { TimeZoneSettingModule } from './time-zone-setting/time-zone-setting.module';
import { UpdateInfoModule } from './update-info/update-info.module';
import { UserActionModule } from './user-action/user-action.module';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    AutoLoginModule,
    CleanCacheModule,
    EMailTemplateModule,
    ImportValueModule,
    LanguageConfModule,
    ListOfGroupModule,
    ListOfRolesModule,
    MailSettingModule,
    ReCaptchaSettingModule,
    TimeZoneSettingModule,
    UpdateInfoModule,
    UserActionModule,
    UsersModule
  ],
  declarations: [SystemComponent]
})
export class SystemModule {}
