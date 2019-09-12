import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewArchiveComponent } from './new-archive.component';

const routes: Routes = [{ path: 'newarchive', component: NewArchiveComponent, data: { title: extract('NewArchive') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewArchiveRoutingModule {}
