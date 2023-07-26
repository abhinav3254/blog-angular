import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BlogContentComponent } from './blog-content/blog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
    BlogContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
