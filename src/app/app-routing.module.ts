import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/components/dashboard/dashboard.component';
import { FeaturedPlaylistComponent } from './features/playlists/components/featured-playlist/featured-playlist.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'playlists', component: FeaturedPlaylistComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
