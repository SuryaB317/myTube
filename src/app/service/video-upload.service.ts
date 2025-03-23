import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  constructor() { }

  uploadVideo(userId:number, videoTitle:string, videoFile: File):Observable<any>{
    console.log('Uploading video...');
    console.log('User ID:', userId);
    console.log('Video Title:', videoTitle);
    console.log('Video File:', videoFile);
    return of({ success: true, message: 'Video uploaded successfully!' });
  }

}
