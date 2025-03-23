import { VideoUploadService } from './../service/video-upload.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent implements OnInit {
  userId!: number;
  videoTitle: string = '';
  videoFile: File | null = null;
  http: any;
  uploadMessage: string = "";

  constructor(private route: ActivatedRoute,
    private videoUploadService:VideoUploadService
  ) {}

  ngOnInit(): void {
    // Getting the user id from the route
    this.userId = +this.route.snapshot.paramMap.get('id')!;
  }

  onFileSelect(event: any): void {
    this.videoFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.videoTitle && this.videoFile) {
      // Create a FormData object to send the video as multipart/form-data
      // Call your backend API to upload the video (adjust URL accordingly)
      this.videoUploadService.uploadVideo(this.userId, this.videoTitle, this.videoFile).subscribe(
        (response) => {

          console.log('Upload successful:', response);
          localStorage.setItem("uploaded",JSON.stringify(response));
          this.uploadMessage = response.message;
          console.log('Upload successful:',this.uploadMessage);
        },
        (error) => {
          console.error('Upload failed:', error);
        }
      );
  }
}
}
