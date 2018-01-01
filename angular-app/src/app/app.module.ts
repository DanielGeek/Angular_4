import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// third party imports
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import {AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from 'ngx-bootstrap/carousel/carousel.component';




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
    // ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, VideoListComponent]
})
export class AppModule { }
