import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { GeoAdjustComponent } from './geo-adjust.component';

const routes: Routes = [{ path: 'geoadjust', component: GeoAdjustComponent, data: { title: extract('GeoAdjust') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GeoAdjustRoutingModule {}
