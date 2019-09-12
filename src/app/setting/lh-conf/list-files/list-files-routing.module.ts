import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ListFilesComponent } from './list-files.component';

const routes: Routes = [{ path: 'listfiles', component: ListFilesComponent, data: { title: extract('ListFiles') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ListFilesRoutingModule {}
