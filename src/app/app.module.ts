import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { ShellModule } from './shell/shell.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ChatListModule } from './chat-list/chat-list.module';
import { OnlineVisitorsModule } from './online-visitors/online-visitors.module';
import { ChatTabModule } from './chat-tab/chat-tab.module';
import { QuestionaryModule } from './questionary/questionary.module';
import { FaqModule } from './faq/faq.module';
import { SettingModule } from './setting/setting.module';
import { ChatBoxModule } from './chat-box/chat-box.module';
import { FormModule } from './form/form.module';
import { BrowseOffersModule } from './browse-offers/browse-offers.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,

    LoginModule,
    AppRoutingModule,
    DashboardModule,
    ChatListModule,
    OnlineVisitorsModule,
    ChatTabModule,
    QuestionaryModule,
    FaqModule,
    SettingModule,
    ChatBoxModule,
    FormModule,
    BrowseOffersModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
