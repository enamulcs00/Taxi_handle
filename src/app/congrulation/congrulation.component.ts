import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congrulation',
  templateUrl: './congrulation.component.html',
  styleUrls: ['./congrulation.component.scss']
})
export class CongrulationComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTotrackingpage() {
    this.router.navigate(['trackingpage']);

  }
}
