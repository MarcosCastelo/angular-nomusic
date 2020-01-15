import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';

import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private artistsUrl = 'http://localhost:8000/artists/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getArtists(): Observable<any>{
    return this.http.get<any>(this.artistsUrl);
  }

  getArtist(pk: number): Observable<any> {
    return this.http.get<any>(this.artistsUrl + pk);
  }

  addArtist(artist:Artist): Observable<Artist>{
    return this.http.post<Artist>(this.artistsUrl, artist, this.httpOptions)
  }

  updateArtist(artist: Artist): Observable<any> {
    return this.http.put(this.artistsUrl + artist.pk + "/", artist, this.httpOptions);
  }

  deleteArtist(artist: Artist | number): Observable<Artist> {
    const pk = typeof artist === 'number' ? artist : artist.pk;
    const url = this.artistsUrl + pk;

    return this.http.delete<Artist>(url, this.httpOptions)
  }

}
