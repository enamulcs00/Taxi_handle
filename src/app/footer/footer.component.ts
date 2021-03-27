import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router,public dialog: MatDialog,private _route : ActivatedRoute) { }

  ngOnInit(): void {
  }
  gotoaboutUs() {
    this.router.navigate(['aboutus']);
  }

  gotoHowitwork() {
  this.router.navigate(['homepage/#H_I_W'])
}

gotocook() {
  this.router.navigate(['cook'])
}

}
