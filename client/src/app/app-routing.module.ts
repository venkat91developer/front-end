import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Common/home/home.component';
import { MusicPlayerComponent } from './Components/Projects/Music/music-player/music-player.component';
import { ProjectsComponent } from './Components/Common/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'music-player',
    component: MusicPlayerComponent
  },
  {
    path: 'header',
    component: Headers
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
