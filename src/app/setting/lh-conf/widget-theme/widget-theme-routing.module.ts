import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { WidgetThemeComponent } from './widget-theme.component';

const routes: Routes = [
  { path: 'widgettheme', component: WidgetThemeComponent, data: { title: extract('WidgetTheme') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WidgetThemeRoutingModule {}
