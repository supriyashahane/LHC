import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewQueComponent } from './new-que.component';
import { NewQueRoutingModule } from './new-que-routing.module';

@NgModule({
  imports: [CommonModule, NewQueRoutingModule],
  declarations: [NewQueComponent]
})
export class NewQueModule {}
