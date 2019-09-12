import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { AutoLoginComponent } from './auto-login.component';

const routes: Routes = [{ path: 'autologin', component: AutoLoginComponent, data: { title: extract('AutoLogin') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AutoLoginRoutingModule {}
