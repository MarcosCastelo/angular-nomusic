import { Component, OnInit } from '@angular/core';
import { Music } from '../models/music';
import { Artist } from '../models/artist';

import { MusicService } from '../services/music.service'
import { ArtistService } from '../services/artist.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  musics: Music[]
  artists: Artist[]

  constructor(
    private musicService: MusicService,
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.getMusics();
    this.getArtists();
  }

  getMusics(){
    this.musicService.getMusics().subscribe(musics => this.musics = musics.results.slice(0, 3))
  }

  getArtists(){
    this.artistService.getArtists().subscribe(artists => this.artists = artists.results.slice(0, 3))
  }

  getMusicIndex( music: Music ){
    return this.musics.indexOf(music) + 1;
  }

  getArtistIndex( artist: Artist ){
    return this.artists.indexOf(artist) + 1;
  }

}
