import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackingpage',
  templateUrl: './trackingpage.component.html',
  styleUrls: ['./trackingpage.component.scss']
})
export class TrackingpageComponent implements OnInit {
  public lat = 24.799448;
  public lng = 120.979021;

  public origin: any;
  public destination: any;
  constructor() { }

  ngOnInit() {
    this.getDirection();
  }
  getDirection() {
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }
}
