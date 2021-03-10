import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PartialColumnDef } from 'src/app/shared/components/grid/column-def';
import { PlaylistContent } from '../../models/playlist-data';
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: 'app-featured-playlist',
  templateUrl: './featured-playlist.component.html',
  styleUrls: ['./featured-playlist.component.scss']
})
export class FeaturedPlaylistComponent implements OnInit, OnDestroy {

  pageTitle: string;
  playlistContents: PlaylistContent[];
  columnDefs: PartialColumnDef[] = [
    { field: 'name', maxWidth: 200 },
    { field: 'kind', maxWidth: 200 },
    { field: 'url'},
    { field: 'curator_name', headerName: 'Curator Name', maxWidth: 250 },
    { field: 'artwork' }
  ];

  private readonly onDestroy = new Subject<void>();

  constructor(private dataApiService: DataApiService) {}

  ngOnInit(): void {
    this.retrieveFeaturedPlaylists();
  }

  private retrieveFeaturedPlaylists(): void {
    this.dataApiService.getFeaturedPlaylist()
      .pipe(takeUntil(this.onDestroy))
      .subscribe((data) => {
        this.pageTitle = data.featuredPlaylists.name;
        this.playlistContents = data.featuredPlaylists.content;
      });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }
}
