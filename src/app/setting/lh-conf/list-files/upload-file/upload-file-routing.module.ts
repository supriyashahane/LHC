import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { UploadFileComponent } from './upload-file.component';

const routes: Routes = [{ path: 'uploadfile', component: UploadFileComponent, data: { title: extract('UploadFile') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UploadFileRoutingModule {}
