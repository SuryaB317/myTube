import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommandVideoComponent } from './recommand-video.component';

describe('RecommandVideoComponent', () => {
  let component: RecommandVideoComponent;
  let fixture: ComponentFixture<RecommandVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommandVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommandVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
