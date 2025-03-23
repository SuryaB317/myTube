import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { UserUploadComponent } from './user-upload/user-upload.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'search' , component: SearchComponent},
  { path: 'video/:id', component: PlayerComponent },
  { path: 'upload', component: UserUploadComponent },
  {path: 'signin', component:SignInComponent},
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'upload', component: UserUploadComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
