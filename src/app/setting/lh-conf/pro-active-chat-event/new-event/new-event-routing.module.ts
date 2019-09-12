import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewEventComponent } from './new-event.component';

const routes: Routes = [{ path: 'newevent', component: NewEventComponent, data: { title: extract('NewEvent') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewEventRoutingModule {}
