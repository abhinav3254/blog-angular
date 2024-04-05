import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { NavComponent } from './components/nav/nav.component';
import { BlogContainerComponent } from './components/blog-container/blog-container.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    NavComponent,
    BlogContainerComponent,
    BlogDetailsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
