import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultAdminThemeComponent } from './default-admin-theme.component';
import { DefaultAdminThemeRoutingModule } from './default-admin-theme-routing.module';

@NgModule({
  imports: [CommonModule, DefaultAdminThemeRoutingModule],
  declarations: [DefaultAdminThemeComponent]
})
export class DefaultAdminThemeModule {}
