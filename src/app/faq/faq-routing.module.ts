import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { FaqComponent } from './faq.component';

const routes: Routes = [{ path: '', component: FaqComponent, data: { title: extract('Faq') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FaqRoutingModule {}
