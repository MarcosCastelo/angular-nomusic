import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Music } from '../models/music';


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private musicsUrl = 'http://localhost:8000/musics/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  getMusics(): Observable<any>{
    return this.http.get<any>(this.musicsUrl);
  }

  getMusic(pk: number): Observable<any> {
    return this.http.get<any>(this.musicsUrl + pk);
  }

  addMusic(music:Music): Observable<Music>{
    return this.http.post<Music>(this.musicsUrl, music, this.httpOptions)
  }

  updateMusic(music: Music): Observable<any> {
    return this.http.put(this.musicsUrl + music.pk + "/", music, this.httpOptions);
  }

  deleteMusic(music: Music | number): Observable<Music> {
    const pk = typeof music === 'number' ? music : music.pk;
    const url = this.musicsUrl + pk;

    return this.http.delete<Music>(url, this.httpOptions)
  }

}
