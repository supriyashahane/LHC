import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DefaultAdminThemeComponent } from './default-admin-theme.component';

const routes: Routes = [
  { path: 'defaultadmintheme', component: DefaultAdminThemeComponent, data: { title: extract('DefaultAdminTheme') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DefaultAdminThemeRoutingModule {}
