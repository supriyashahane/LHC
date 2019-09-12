import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { FormComponent } from './form.component';

const routes: Routes = [{ path: '', component: FormComponent, data: { title: extract('Form') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormRoutingModule {}
