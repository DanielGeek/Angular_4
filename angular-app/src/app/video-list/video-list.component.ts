import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  title = "title video list";
  // videoList = ["Item 1", "Item 2", "Item 3"]
  videoList = [
    {
      name: "video 1",
      slug: "video-slug-1"
    },
    {
      name: "video 2",
      slug: "video-slug-2"
    },
    {
      name: "video 3",
      slug: "video-slug-3"
    } 
  ]
  constructor() { }

  ngOnInit() {
  }

}
