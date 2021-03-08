import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FeaturedPlaylistData } from '../models/playlist-data';
import { FEATURED_PLAYLISTS } from './api-resources';

const baseUrl = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private httpClient: HttpClient) {}

  getFeaturedPlaylist(): Observable<FeaturedPlaylistData> {
    const url = `${baseUrl}/${FEATURED_PLAYLISTS}`;
    return this.httpClient.get<FeaturedPlaylistData>(url)
      .pipe(
        catchError(error => {
          alert(error.error);
          return throwError(error);
        })
      );
  }
}
