import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDirectiveComponent } from './directives-pipes/components/test-directive/test-directive.component';
import { TestPipeComponent } from './directives-pipes/components/test-pipe/test-pipe.component';
import { TemplateDrivenFormComponent } from './test-forms/components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './test-forms/components/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: 'directives',
    component: TestDirectiveComponent,
  },
  {
    path: 'pipes',
    component: TestPipeComponent,
  },
  {
    path: 'template-driven',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
