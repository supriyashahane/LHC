import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewWidgetComponent } from './new-widget.component';

const routes: Routes = [{ path: 'newwidget', component: NewWidgetComponent, data: { title: extract('NewWidget') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewWidgetRoutingModule {}
