import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTempComponent } from './edit-temp.component';
import { EditTempRoutingModule } from './edit-temp-routing.module';

@NgModule({
  imports: [CommonModule, EditTempRoutingModule],
  declarations: [EditTempComponent]
})
export class EditTempModule {}
