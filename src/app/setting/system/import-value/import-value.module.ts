import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportValueComponent } from './import-value.component';
import { ImportValueRoutingModule } from './import-value-routing.module';

@NgModule({
  imports: [CommonModule, ImportValueRoutingModule],
  declarations: [ImportValueComponent]
})
export class ImportValueModule {}
