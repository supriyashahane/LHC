import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewApiComponent } from './new-api.component';
import { NewApiRoutingModule } from './new-api-routing.module';

@NgModule({
  imports: [CommonModule, NewApiRoutingModule],
  declarations: [NewApiComponent]
})
export class NewApiModule {}
