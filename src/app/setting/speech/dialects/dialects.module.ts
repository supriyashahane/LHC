import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialectsComponent } from './dialects.component';
import { DialectsRoutingModule } from './dialects-routing.module';
import { NewDialectsModule } from './new-dialects/new-dialects.module';

@NgModule({
  imports: [CommonModule, DialectsRoutingModule, NewDialectsModule],
  declarations: [DialectsComponent]
})
export class DialectsModule {}
