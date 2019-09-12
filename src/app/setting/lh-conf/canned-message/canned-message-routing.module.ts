import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { extract } from '@app/core';
import { CannedMessageComponent } from './canned-message.component';

const routes: Routes = [
  { path: 'cannedmessage', component: CannedMessageComponent, data: { title: extract('CannedMessage') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CannedMessageRoutingModule {}
