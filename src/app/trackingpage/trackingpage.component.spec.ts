import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingpageComponent } from './trackingpage.component';

describe('TrackingpageComponent', () => {
  let component: TrackingpageComponent;
  let fixture: ComponentFixture<TrackingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
