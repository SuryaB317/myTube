import { TestBed } from '@angular/core/testing';

import { VideoSrcService } from './video-src.service';

describe('VideoSrcService', () => {
  let service: VideoSrcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoSrcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
