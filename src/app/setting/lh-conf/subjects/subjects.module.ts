import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { NewSubjectModule } from './new-subject/new-subject.module';
@NgModule({
  imports: [CommonModule, SubjectsRoutingModule, NewSubjectModule],
  declarations: [SubjectsComponent]
})
export class SubjectsModule {}
