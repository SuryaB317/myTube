import { Component } from '@angular/core';
import { VideoSrcService } from '../service/video-src.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  videos:any[] = [];
  constructor(private videoService: VideoSrcService, private router: Router) {}

  ngOnInit(): void {
    this.videos = this.videoService.getVideos();
  }

  onVideoSelect(id: number): void {
    console.log('Selected video ID:', id);
    this.router.navigate(['/video', id]);
  }
}
