import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isExpanded = false;

  toggleNavbar() {
    this.isExpanded = !this.isExpanded;
  }
  constructor(private router:Router) {}
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    feather.replace(); // This will replace all `<i data-feather="...">` with SVGs
  }
  gotoMusicPlayer(){
    this.router.navigateByUrl('music-player')
  }
  gotoProject() {
    this.router.navigateByUrl('projects')
  }
  gotoHome(){
    // this.router.navigateByUrl('home')
  }
}
