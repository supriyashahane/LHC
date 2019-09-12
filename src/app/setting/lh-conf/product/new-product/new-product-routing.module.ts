import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { NewProductComponent } from './new-product.component';

const routes: Routes = [{ path: 'newproduct', component: NewProductComponent, data: { title: extract('NewProduct') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class NewProductRoutingModule {}
