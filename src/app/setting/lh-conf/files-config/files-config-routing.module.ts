import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { FilesConfigComponent } from './files-config.component';

const routes: Routes = [
  { path: 'filesconfig', component: FilesConfigComponent, data: { title: extract('FilesConfig') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FilesConfigRoutingModule {}
