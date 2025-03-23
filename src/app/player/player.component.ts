import { Video } from './../service/video-src.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoSrcService } from '../service/video-src.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  private tapTimeout: any = null;
  private lastTapTime: number = 0;
  private lastVideoTime: number = 0;
  private clickCount:number = 0;
  private clcikTime:number = 0;

  handleClick(event: MouseEvent, videoElement: HTMLVideoElement) {
    const videoWidth = videoElement.offsetWidth;
    const clickX = event.offsetX;
    const wasPaused = videoElement.paused;
    const currTime = new Date().getTime();

    const storeVideoTimeBeforeTap = () => {
      this.lastVideoTime = videoElement.currentTime;
    };

    const actionTimeChange = () => {
      if (clickX <= videoWidth / 2) {
        videoElement.currentTime -= 5;
      } else {
        videoElement.currentTime += 5;
      }

      if (!wasPaused) {
        videoElement.play().catch((error)=>{
          console.log("Error playing video",error)
        });
      }
    };

    if (this.tapTimeout) {
      clearTimeout(this.tapTimeout);
      this.tapTimeout = null;

      if (currTime - this.lastTapTime < 300) {
        actionTimeChange();
        return;
      }
    }

    storeVideoTimeBeforeTap();

    this.tapTimeout = setTimeout(() => {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }, 300);

    this.lastTapTime = currTime;

    event.preventDefault();
  }


  video: Video | undefined;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoSrcService
  ) {}

  ngOnInit(): void{
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.video = this.videoService.getVideos().find((video) => video.id === id);
  }

}
