import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Artist } from '../models/artist';
import { ArtistService } from '../services/artist.service'

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {
  @Input() artist: Artist;

  constructor(
    private artistService: ArtistService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getArtist();
  }

  getArtist() {
    const pk = +this.route.snapshot.paramMap.get('pk');
    this.artistService.getArtist(pk).subscribe(artist => this.artist = artist);
  }

  updateArtist() {
    this.artistService.updateArtist(this.artist).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

}
