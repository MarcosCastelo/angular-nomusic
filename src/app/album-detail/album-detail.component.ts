import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  @Input() album: Album;

  constructor(
    private albumService: AlbumService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum() {
    const pk = +this.route.snapshot.paramMap.get('pk');
    this.albumService.getAlbum(pk).subscribe(data => this.album = data);
  }

  updateAlbum() {
    this.albumService.updateAlbum(this.album).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

}
