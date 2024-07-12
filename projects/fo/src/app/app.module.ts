import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarPipe } from './pipes/star.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome.component';
import { TemplateSyntaxComponent } from './pages/template-syntax/template-syntax.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MATERIAL_MODULES } from './material.barrel';

const STANDALONE_PIPES_DIRECTIVES = [
  StarPipe,
  ReversePipe,
  HighlightDirective,
];

const PAGE_COMPONENTS = [
  TemplateSyntaxComponent,
  HomeComponent,
  NotFoundComponent
];

const COMPONENTS = [
  HeaderComponent,
  WelcomeComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...PAGE_COMPONENTS
  ],
  imports: [
    BrowserModule, // inside this we have native pipes...
    AppRoutingModule,
    ...STANDALONE_PIPES_DIRECTIVES,
    ...MATERIAL_MODULES
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
