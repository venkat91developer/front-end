import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Common/home/home.component';
import { MusicPlayerComponent } from './Components/Projects/Music/music-player/music-player.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { ProjectsComponent } from './Components/Common/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MusicPlayerComponent,
    HeaderComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent,
    MusicPlayerComponent,
    HeaderComponent,
    ProjectsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
