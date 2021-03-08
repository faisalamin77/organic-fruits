import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedPlaylistComponent } from './features/playlists/components/featured-playlist/featured-playlist.component';

const routes: Routes = [
  { path: '', component: FeaturedPlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
