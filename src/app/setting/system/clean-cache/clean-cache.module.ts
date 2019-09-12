import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanCacheComponent } from './clean-cache.component';
import { CleanCacheRoutingModule } from './clean-cache-routing.module';

@NgModule({
  imports: [CommonModule, CleanCacheRoutingModule],
  declarations: [CleanCacheComponent]
})
export class CleanCacheModule {}
