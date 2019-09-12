import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDialectsComponent } from './new-dialects.component';
import { NewDialectsRoutingModule } from './new-dialects-routing.module';

@NgModule({
  imports: [CommonModule, NewDialectsRoutingModule],
  declarations: [NewDialectsComponent]
})
export class NewDialectsModule {}
