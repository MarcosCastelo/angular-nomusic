import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albumsUrl = 'http://localhost:8000/albums/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any>{
    return this.http.get<any>(this.albumsUrl);
  }

  getAlbum(pk: number): Observable<any> {
    return this.http.get<any>(this.albumsUrl + pk);
  }

  addAlbum(album:Album): Observable<Album>{
    return this.http.post<Album>(this.albumsUrl, album, this.httpOptions)
  }

  updateAlbum(album: Album): Observable<any> {
    return this.http.put(this.albumsUrl + album.pk + "/", album, this.httpOptions);
  }

  deleteAlbum(album: Album | number): Observable<Album> {
    const pk = typeof album === 'number' ? album : album.pk;
    const url = this.albumsUrl + pk;

    return this.http.delete<Album>(url, this.httpOptions)
  }

}
