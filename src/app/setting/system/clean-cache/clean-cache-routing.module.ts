import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { CleanCacheComponent } from './clean-cache.component';

const routes: Routes = [{ path: 'cleancache', component: CleanCacheComponent, data: { title: extract('CleanCache') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CleanCacheRoutingModule {}
