import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { SubjectsComponent } from './subjects.component';

const routes: Routes = [{ path: 'subjects', component: SubjectsComponent, data: { title: extract('Subjects') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SubjectsRoutingModule {}
