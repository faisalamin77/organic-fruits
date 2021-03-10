import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import SharedModule from 'src/app/shared/share.module';
import { FeaturedPlaylistComponent } from './components/featured-playlist/featured-playlist.component';
import { PlaylistsRoutingModule } from './playlists-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        PlaylistsRoutingModule
    ],
    declarations: [FeaturedPlaylistComponent]
})
export default class PlaylistsModule {}
