import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewSubjectComponent } from './new-subject.component';
import { NewSubjectRoutingModule } from './new-subject-routing.module';

@NgModule({
  imports: [CommonModule, NewSubjectRoutingModule],
  declarations: [NewSubjectComponent]
})
export class NewSubjectModule {}
