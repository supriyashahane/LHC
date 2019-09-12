import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ImportThemeComponent } from './import-theme.component';

const routes: Routes = [
  { path: 'importtheme', component: ImportThemeComponent, data: { title: extract('ImportTheme') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ImportThemeRoutingModule {}
