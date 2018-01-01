import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// third party imports
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import {AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

import { RouterModule, Routes } from '@angular/router';




const appRoutes: Routes = [
    {
        path: "videos",
        component: VideoListComponent,
    },
    {
        path:"videos/:slug",
        component: VideoDetailComponent,
    }
]

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    HomeComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, VideoListComponent]
})
export class AppModule { }
