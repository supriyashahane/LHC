import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ProductComponent } from './product.component';

const routes: Routes = [{ path: 'product', component: ProductComponent, data: { title: extract('Product') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductRoutingModule {}
