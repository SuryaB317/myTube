import { Injectable } from '@angular/core';
export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  channelName:string;
  view:string;
  time:string;
}
@Injectable({
  providedIn: 'root'
})


export class VideoSrcService {

  constructor() { }

  getVideos(): Video[] {
    return [
      {
        id: 1,
        title: 'Birds are Flying',
        description: 'A video which show the real beauty of Aero-Dynamics ',
         url: 'assets/video1.mp4',
         thumbnail: './assets/thumb_4.jpg',
         channelName: 'Right Bros ',
         view: '1.2M',
         time: '3 years'
      },
      { id: 2,
         title: 'Snow fall',
         description: 'Chirshmas Time enjoy the snow pothum',
          url: 'assets/video2.mp4',
           thumbnail: './assets/thumb_2.jpg',
           channelName: 'Santas Gifts ',
           view: '1.8K',
           time: '13 years'
      },
      { id: 3,
        title: 'Travel',
        description: 'Trottle your gear lets travel beyond mountains',
         url: 'assets/video3.mp4',
          thumbnail: './assets/thumb_3.jpg',
          channelName: 'Twin Trottles Family',
          view: '11.2M',
          time: '1 years'
      },
      { id: 4,
        title: 'Ocean',
        description: 'Lets surf Together 😎',
         url: 'assets/video4.mp4',
          thumbnail: './assets/thumb_1.jpg',
          channelName: 'Waves',
          view: '1M',
          time: '4 years'
      },
      {
        id: 1,
        title: 'Birds are Flying',
        description: 'A video which show the real beauty of Aero-Dynamics ',
         url: 'assets/video1.mp4',
         thumbnail: './assets/thumb_4.jpg',
         channelName: 'Right Bros ',
         view: '1.2M',
         time: '3 years'
      },
      { id: 2,
         title: 'Snow fall',
         description: 'Chirshmas Time enjoy the snow pothum',
          url: 'assets/video2.mp4',
           thumbnail: './assets/thumb_2.jpg',
           channelName: 'Santas Gifts ',
           view: '1.8K',
           time: '13 years'
      },
      { id: 3,
        title: 'Travel',
        description: 'Trottle your gear lets travel beyond mountains',
         url: 'assets/video3.mp4',
          thumbnail: './assets/thumb_3.jpg',
          channelName: 'Twin Trottles Family',
          view: '11.2M',
          time: '1 years'
      },
      { id: 4,
        title: 'Ocean',
        description: 'Lets surf Together 😎',
         url: 'assets/video4.mp4',
          thumbnail: './assets/thumb_1.jpg',
          channelName: 'Waves',
          view: '1M',
          time: '4 years'
      },{ id: 4,
        title: 'Ocean',
        description: 'Lets surf Together 😎',
         url: 'assets/video4.mp4',
          thumbnail: './assets/thumb_1.jpg',
          channelName: 'Waves',
          view: '1M',
          time: '4 years'
      },


    ];
  }

  getVideo(id: number) {
    return this.getVideos().find((video) => video.id === id);
  }
}
