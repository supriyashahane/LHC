import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
    { path: 'chatlist', loadChildren: 'app/chat-list/chat-list.module#ChatListModule' },
    { path: 'onlinevisitors', loadChildren: 'app/online-visitors/online-visitors.module#OnlineVisitorsModule' },
    { path: 'chattab', loadChildren: 'app/chat-tab/chat-tab.module#ChatTabModule' },
    { path: 'questionary', loadChildren: 'app/questionary/questionary.module#QuestionaryModule' },
    { path: 'faq', loadChildren: 'app/faq/faq.module#FaqModule' },
    { path: 'setting', loadChildren: 'app/setting/setting.module#SettingModule' },
    { path: 'chatbox', loadChildren: 'app/chat-box/chat-box.module#ChatBoxModule' },
    { path: 'form', loadChildren: 'app/form/form.module#FormModule' },
    { path: 'formslist', loadChildren: 'app/form/list-of-form/forms-list/forms-list.module#FormsListModule' },
    { path: 'browseoffers', loadChildren: 'app/browse-offers/browse-offers.module#BrowseOffersModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
