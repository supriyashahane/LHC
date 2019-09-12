import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewLimitComponent } from './new-limit.component';
import { NewLimitRoutingModule } from './new-limit-routing.module';

@NgModule({
  imports: [CommonModule, NewLimitRoutingModule],
  declarations: [NewLimitComponent]
})
export class NewLimitModule {}
