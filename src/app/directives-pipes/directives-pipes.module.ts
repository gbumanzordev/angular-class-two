import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestDirectiveComponent } from './components/test-directive/test-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TestPipePipe } from './pipes/test-pipe.pipe';
import { TestPipeComponent } from './components/test-pipe/test-pipe.component';

@NgModule({
  declarations: [TestDirectiveComponent, HighlightDirective, TestPipePipe, TestPipeComponent],
  imports: [CommonModule],
})
export class DirectivesPipesModule {}
