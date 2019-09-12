import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoLoginComponent } from './auto-login.component';
import { AutoLoginRoutingModule } from './auto-login-routing.module';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, AutoLoginRoutingModule, MatTabsModule],
  declarations: [AutoLoginComponent]
})
export class AutoLoginModule {}
