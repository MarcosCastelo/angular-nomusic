import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';
import { MusicService } from '../services/music.service'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {
  musics: Music[]
  error: any;

  constructor(
    private musicService: MusicService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.getMusics();
  }

  getMusics(){
    this.musicService.getMusics().subscribe(musics => this.musics = musics.results)
  }

  addMusic(title: string, length: number, album: string, artist: string){
    title = title.trim();
    if (!title) { return;}

    album = album.trim();
    if (!album) { return;}

    artist = artist.trim();
    if (!artist) { return;}

    if (!length) { return; }

    this.musicService.addMusic({ title, length, album, artist } as Music)
      .subscribe(music => {this.musics.push(music)});

  }

  deleteMusic(music: Music) {
    this.musics = this.musics.filter(m => m !== music);
    this.musicService.deleteMusic(music).subscribe();
  }

  getIndex( music: Music ){
    return this.musics.indexOf(music) + 1;
  }

  isLogged(){
    return this.authService.isLoggedIn()
  }

}
