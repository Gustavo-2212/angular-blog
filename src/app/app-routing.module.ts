import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { DefaultComponent } from './components/default/default.component';

const routes: Routes = [
  { path: '', component:HomeComponent, pathMatch: 'full'},
  { path: 'case-studies', component:DefaultComponent},
  { path: 'blogs', component:DefaultComponent },
  { path: 'blogs/:id', component:ContentComponent, pathMatch: 'full'},
  { path: 'resource', component:DefaultComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
