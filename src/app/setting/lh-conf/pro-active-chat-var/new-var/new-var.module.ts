import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewVarComponent } from './new-var.component';
import { NewVarRoutingModule } from './new-var-routing.module';
@NgModule({
  imports: [CommonModule, NewVarRoutingModule],
  declarations: [NewVarComponent]
})
export class NewVarModule {}
