import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router) {}
  ngAfterViewInit() {
    feather.replace(); // This will replace all `<i data-feather="...">` with SVGs
  }
  gotoMusicPlayer(){
    this.router.navigateByUrl('music-player')
  }
}
