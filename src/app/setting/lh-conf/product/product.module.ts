import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { NewProductModule } from './new-product/new-product.module';

@NgModule({
  imports: [CommonModule, ProductRoutingModule, NewProductModule],
  declarations: [ProductComponent]
})
export class ProductModule {}
