import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAnsComponent } from './new-ans.component';
import { NewAnsRoutingModule } from './new-ans-routing.module';

@NgModule({
  imports: [CommonModule, NewAnsRoutingModule],
  declarations: [NewAnsComponent]
})
export class NewAnsModule {}
