import { Component, OnInit, Input } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Music } from '../models/music';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  @Input() music: Music;

  constructor(
    private musicService: MusicService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getMusic();
  }

  getMusic() {
    const pk = +this.route.snapshot.paramMap.get('pk');
    this.musicService.getMusic(pk).subscribe(music => this.music = music);
  }

  updateMusic() {
    this.musicService.updateMusic(this.music).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }

}
