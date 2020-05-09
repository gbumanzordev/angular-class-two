import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesPipesModule } from './directives-pipes/directives-pipes.module';
import { TestFormsModule } from './test-forms/test-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectivesPipesModule,
    TestFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
