import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarPipe } from './pipes/star.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome.component';
import { TemplateSyntaxComponent } from './pages/template-syntax/template-syntax.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    TemplateSyntaxComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, // inside this we have native pipes...
    StarPipe,
    ReversePipe,
    HighlightDirective,
    MatToolbarModule, MatButtonModule, MatIconModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
