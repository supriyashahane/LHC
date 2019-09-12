import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LhConfComponent } from './lh-conf.component';
import { LhConfRoutingModule } from './lh-conf-routing.module';
import { AdminThemeModule } from './admin-theme/admin-theme.module';
import { AutoResponderModule } from './auto-responder/auto-responder.module';
import { DepartModule } from './depart/depart.module';
import { BlockedUsersModule } from './blocked-users/blocked-users.module';
import { ChatConfigModule } from './chat-config/chat-config.module';
import { ChatTransferConfigModule } from './chat-transfer-config/chat-transfer-config.module';
import { SettingsModule } from './settings/settings.module';
import { GeoAdjustModule } from './geo-adjust/geo-adjust.module';
import { GeoDetectionModule } from './geo-detection/geo-detection.module';
import { StartChatSettingModule } from './start-chat-setting/start-chat-setting.module';
import { AutoTranslationModule } from './auto-translation/auto-translation.module';
import { CannedMessageModule } from './canned-message/canned-message.module';
import { SurveysModule } from './surveys/surveys.module';
import { ProActiveChatEventModule } from './pro-active-chat-event/pro-active-chat-event.module';
import { ProActiveChatVarModule } from './pro-active-chat-var/pro-active-chat-var.module';
import { ProActiveChatInvModule } from './pro-active-chat-inv/pro-active-chat-inv.module';
import { OfflineSettingModule } from './offline-setting/offline-setting.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ProActiveChatComponentModule } from './pro-active-chat-component/pro-active-chat-component.module';
import { XamppSettingModule } from './xampp-setting/xampp-setting.module';
import { ChatArchieveModule } from './chat-archieve/chat-archieve.module';
import { StaticModule } from './static/static.module';
import { MaintanceModule } from './maintance/maintance.module';
import { ProductModule } from './product/product.module';
import { PaidChatConfModule } from './paid-chat-conf/paid-chat-conf.module';
import { RestApiModule } from './rest-api/rest-api.module';
import { FilesConfigModule } from './files-config/files-config.module';
import { ListFilesModule } from './list-files/list-files.module';
import { WidgetThemeModule } from './widget-theme/widget-theme.module';
import { ImportThemeModule } from './import-theme/import-theme.module';
import { DefaultThemeModule } from './default-theme/default-theme.module';
import { DefaultAdminThemeModule } from './default-admin-theme/default-admin-theme.module';
import { BotListModule } from './bot-list/bot-list.module';
import { SubscriberListModule } from './subscriber-list/subscriber-list.module';
import { NotiSettingModule } from './noti-setting/noti-setting.module';

@NgModule({
  imports: [
    CommonModule,
    LhConfRoutingModule,
    AdminThemeModule,
    AutoResponderModule,
    ChatConfigModule,
    DepartModule,
    BlockedUsersModule,
    ChatTransferConfigModule,
    SettingsModule,
    GeoAdjustModule,
    GeoDetectionModule,
    StartChatSettingModule,
    AutoTranslationModule,
    CannedMessageModule,
    SurveysModule,
    ProActiveChatEventModule,
    ProActiveChatVarModule,
    ProActiveChatInvModule,
    OfflineSettingModule,
    SubjectsModule,
    ProActiveChatComponentModule,
    XamppSettingModule,
    ChatArchieveModule,
    StaticModule,
    MaintanceModule,
    ProductModule,
    PaidChatConfModule,
    RestApiModule,
    FilesConfigModule,
    ListFilesModule,
    WidgetThemeModule,
    ImportThemeModule,
    DefaultThemeModule,
    DefaultAdminThemeModule,
    BotListModule,
    SubscriberListModule,
    NotiSettingModule
  ],
  declarations: [LhConfComponent]
})
export class LHConfModule {}
