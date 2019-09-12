import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportThemeComponent } from './import-theme.component';
import { ImportThemeRoutingModule } from './import-theme-routing.module';

@NgModule({
  imports: [CommonModule, ImportThemeRoutingModule],
  declarations: [ImportThemeComponent]
})
export class ImportThemeModule {}
