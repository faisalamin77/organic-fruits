import { Component } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { PartialColumnDef } from 'src/app/shared/components/grid/column-def';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-featured-playlist',
  templateUrl: './featured-playlist.component.html',
  styleUrls: ['./featured-playlist.component.scss']
})
export class FeaturedPlaylistComponent {

  columnDefs: PartialColumnDef[] = [
    { field: 'name', maxWidth: 200 },
    { field: 'kind', maxWidth: 200 },
    { field: 'url'},
    { field: 'curator_name', headerName: 'Curator Name', maxWidth: 250 },
    { field: 'artwork' }
  ];

  pageTitle: string;
  playlistContents = this.dataApiService.getFeaturedPlaylist()
    .pipe(
      tap(data => this.pageTitle = data.featuredPlaylists.name),
      map(data => data.featuredPlaylists.content)
    );

  constructor(private dataApiService: DataApiService) {}
}
