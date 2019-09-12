import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ArchivesListComponent } from './archives-list.component';

const routes: Routes = [
  { path: 'archiveslist', component: ArchivesListComponent, data: { title: extract('ArchivesList') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ArchivesListRoutingModule {}
