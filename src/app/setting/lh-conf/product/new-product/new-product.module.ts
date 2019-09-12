import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProductComponent } from './new-product.component';
import { NewProductRoutingModule } from './new-product-routing.module';
import { NewProModule } from './new-pro/new-pro.module';

@NgModule({
  imports: [CommonModule, NewProductRoutingModule, NewProModule],
  declarations: [NewProductComponent]
})
export class NewProductModule {}
