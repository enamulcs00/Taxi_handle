import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selected = 'option2';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocongrulation() {
    this.router.navigate(['congrulation']);
  }

}
