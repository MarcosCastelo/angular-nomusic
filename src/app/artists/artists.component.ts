import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist';
import { ArtistService } from '../services/artist.service'
import { Album } from '../models/album';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[]
  error: any;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.getArtists();
  }

  getArtists(){
    this.artistService.getArtists().subscribe(artists => this.artists = artists.results)
  }

  deleteArtist(artist: Artist) {
    this.artists = this.artists.filter(m => m !== artist);
    this.artistService.deleteArtist(artist).subscribe();
  }

  getIndex( artist: Artist ){
    return this.artists.indexOf(artist) + 1;
  }

}
