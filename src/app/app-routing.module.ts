import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/dashboard/dashboard.module')
      .then(m => m.default)
  },
  {
    path: 'playlists',
    loadChildren: () => import('./features/playlists/playlists.module')
      .then(m => m.default)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
