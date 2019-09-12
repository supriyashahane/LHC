import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { AdminThemeComponent } from './admin-theme.component';

const routes: Routes = [{ path: 'admintheme', component: AdminThemeComponent, data: { title: extract('AdminTheme') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminThemeRoutingModule {}
