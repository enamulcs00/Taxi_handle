import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.scss']
})
export class CartpageComponent {
  public lat = 24.799448;
  public lng = 120.979021;

  public origin: any;
  public destination: any;

  animal: string;
  name: string;

  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewsDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  getDirection() {
    this.origin = { lat: 24.799448, lng: 120.979021 };
    this.destination = { lat: 24.799524, lng: 120.975017 };
  }
  ngOnInit() {
  }
  goTocart() {
    this.router.navigate(['cart']);

  }
}

@Component({
  selector: 'app-dialog-overviews-dialog',
  templateUrl: 'dialog-overviews-dialog.html',
  styleUrls: ['./cartpage.component.scss']
})
export class DialogOverviewsDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



}
