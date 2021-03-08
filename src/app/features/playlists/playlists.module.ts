import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import SharedModule from 'src/app/shared/share.module';
import { FeaturedPlaylistComponent } from './components/featured-playlist/featured-playlist.component';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule
    ],
    declarations: [FeaturedPlaylistComponent],
    exports: [FeaturedPlaylistComponent]
})
export default class PlaylistsModule {}
