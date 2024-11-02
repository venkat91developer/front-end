import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent {
  constructor(private router:Router) { }

  ngOnInit() {
  }
  togglePlayPause() {
    var audio = document.getElementById('audio') as any;
    var playpause = document.getElementById("play") as any;
    if(audio && playpause){
      if (audio.paused || audio.ended) {
        playpause.title = "Pause";
        audio.play();
    } else {
        playpause.title = "Play";
        audio.pause();
    }
    }
  }
  goBack(){
    console.log('working');
    
    this.router.navigateByUrl('projects')
  }
}
