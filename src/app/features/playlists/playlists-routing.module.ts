import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedPlaylistComponent } from './components/featured-playlist/featured-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturedPlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
