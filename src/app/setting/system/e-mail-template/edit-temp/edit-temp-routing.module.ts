import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { EditTempComponent } from './edit-temp.component';

const routes: Routes = [{ path: 'edittemp', component: EditTempComponent, data: { title: extract('EditTemp') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class EditTempRoutingModule {}
