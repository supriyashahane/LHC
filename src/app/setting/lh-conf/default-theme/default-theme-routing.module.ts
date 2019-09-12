import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { DefaultThemeComponent } from './default-theme.component';

const routes: Routes = [
  { path: 'defaulttheme', component: DefaultThemeComponent, data: { title: extract('DefaultTheme') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DefaultThemeRoutingModule {}
