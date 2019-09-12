import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { ImportValueComponent } from './import-value.component';

const routes: Routes = [
  { path: 'importvalue', component: ImportValueComponent, data: { title: extract('ImportValue') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ImportValueRoutingModule {}
