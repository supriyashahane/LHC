import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminThemeComponent } from './admin-theme.component';
import { AdminThemeRoutingModule } from './admin-theme-routing.module';
import { NewAdminModule } from './new-admin/new-admin.module';

@NgModule({
  imports: [CommonModule, AdminThemeRoutingModule, NewAdminModule],
  declarations: [AdminThemeComponent]
})
export class AdminThemeModule {}
