import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultThemeComponent } from './default-theme.component';
import { DefaultThemeRoutingModule } from './default-theme-routing.module';

@NgModule({
  imports: [CommonModule, DefaultThemeRoutingModule],
  declarations: [DefaultThemeComponent]
})
export class DefaultThemeModule {}
