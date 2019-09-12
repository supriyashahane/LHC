import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestApiComponent } from './rest-api.component';
import { RestApiRoutingModule } from './rest-api-routing.module';
import { NewApiModule } from './new-api/new-api.module';

@NgModule({
  imports: [CommonModule, RestApiRoutingModule, NewApiModule],
  declarations: [RestApiComponent]
})
export class RestApiModule {}
