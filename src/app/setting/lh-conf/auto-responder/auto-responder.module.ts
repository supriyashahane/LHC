import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoResponderRouterModule } from './auto-responder-router.module';
import { AutoResponderComponent } from './auto-responder.component';
import { NewResponderModule } from './new-responder/new-responder.module';

@NgModule({
  imports: [CommonModule, AutoResponderRouterModule, NewResponderModule],
  declarations: [AutoResponderComponent]
})
export class AutoResponderModule {}
