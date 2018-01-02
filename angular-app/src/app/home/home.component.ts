import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeImageList = [
    {image: "assets/images/nature/1.jpg", title: "Image 1", link: "videos/video-1"},
    {image: "assets/images/nature/2.jpg", title: "Image 2", link: "videos/video-1"},
    {image: "assets/images/nature/3.jpg", title: "Image 3", link: "videos/video-1"},
    {image: "assets/images/nature/4.jpg", title: "Image 4", link: "videos/video-1"},
    {image: "assets/images/nature/5.jpg", title: "Image 5", link: "videos/video-1"},
    {image: "assets/images/nature/6.jpg", title: "Image 6", link: "videos/video-1"}
  ]
  constructor() { }

  ngOnInit() {
  }

  preventNormal(event:MouseEvent){
    console.log(event)
    event.preventDefault()
    alert("Working...")
  }

}
