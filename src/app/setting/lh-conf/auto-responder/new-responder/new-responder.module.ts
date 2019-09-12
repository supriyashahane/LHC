import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewResponderComponent } from './new-responder.component';
import { NewResponderRoutingModule } from './new-responder-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, NewResponderRoutingModule, MatTabsModule],
  declarations: [NewResponderComponent]
})
export class NewResponderModule {}
