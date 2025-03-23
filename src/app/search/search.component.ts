import { Component, OnInit } from '@angular/core';
import { Video, VideoSrcService } from '../service/video-src.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  query: string = '';
  filteredVideos:Video[] = [];

  constructor(private videoService: VideoSrcService, private router: Router) {}

  ngOnInit(): void {
    this.filteredVideos = this.videoService.getVideos();
  }

  onSearch(): void {
    if (this.query) {
      this.filteredVideos = this.videoService
        .getVideos()
        .filter((video) => video.title.toLowerCase().includes(this.query.toLowerCase()));
    } else {
      this.filteredVideos = this.videoService.getVideos(); // Reset to all videos when query is empty
    }
  }

  onVideoSelect(id: number): void {
    console.log('Selected video ID:', id);
    this.router.navigate(['/video', id]);
  }
}
