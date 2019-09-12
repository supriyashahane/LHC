import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewSubjectComponent } from './new-subject.component';

const routes: Routes = [{ path: 'newsubject', component: NewSubjectComponent, data: { title: extract('NewSubject') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewSubjectRoutingModule {}
