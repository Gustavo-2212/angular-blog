import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardPostMainComponent } from './components/card-post-main/card-post-main.component';
import { MenuPostComponent } from './components/menu-post/menu-post.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CardTitleComponent,
    CardPostMainComponent,
    MenuPostComponent,
    CardPostComponent,
    HomeComponent,
    ContentComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
