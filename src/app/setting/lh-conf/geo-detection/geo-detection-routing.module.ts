import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { GeoDetectionComponent } from './geo-detection.component';

const routes: Routes = [
  { path: 'geodetection', component: GeoDetectionComponent, data: { title: extract('GeoDetection') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GeoDetectionRoutingModule {}
