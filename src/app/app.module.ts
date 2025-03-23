import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatIconModule} from '@angular/material/icon';
import { RecommandVideoComponent } from './recommand-video/recommand-video.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { UserUploadComponent } from './user-upload/user-upload.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SignInComponent,
    RecommandVideoComponent,
    SideBarComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    UserComponent,
    UserUploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
