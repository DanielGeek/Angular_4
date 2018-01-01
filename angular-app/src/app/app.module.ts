import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule } from './app.routing';
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
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, VideoListComponent]
})
export class AppModule { }
