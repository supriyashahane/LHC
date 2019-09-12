import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionaryComponent } from './questionary.component';
import { QuestionaryRoutingModule } from './questionary-routing.module';
import { NewQueModule } from './new-que/new-que.module';
import { HtmlCodeModule } from './html-code/html-code.module';
import { PageEmbedCodeModule } from './page-embed-code/page-embed-code.module';
@NgModule({
  imports: [CommonModule, QuestionaryRoutingModule, NewQueModule, HtmlCodeModule, PageEmbedCodeModule],
  declarations: [QuestionaryComponent]
})
export class QuestionaryModule {}
