import { Component, Inject, OnInit } from '@angular/core';
import * as js from '../../assets/js/custom.js'
import { ActivatedRoute, Router } from '@angular/router'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from '../payment/payment.component.js';
import { NetserviceService } from '../netservice.service.js';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header:any
  params: any;
  name: any;
  animal: any;
  header5:any;
  login: string;
  usernmae: any;
  profilepic: any;
  imgurl = 'https://appgrowthcompany.com:3128/'
  constructor(private router : Router,private fb: FormBuilder,private Srvc:NetserviceService,public dialog: MatDialog,private _route : ActivatedRoute) {

    this.Srvc.$transfer.subscribe((res:any)=>
    {
      this.usernmae = res.userName
      this.profilepic = res.profilePic
    })
    
   }

  ngOnInit(): void {
    this.login = localStorage.getItem('token')
    this.params = this._route.snapshot.routeConfig.path
    if(this.params == '' || this.params == 'homepage')
    {
      this.header = 'header header2'
      this.header5 = 'header_b'
    }
    else
    {
      this.header = "header header_bg"
      this.header5 = 'header_space'
    }
    js.customScript();
    if(this.login)
    {
      this.getProfile()
    }
  }


  getProfile()
  {
    this.Srvc.getProfileData().subscribe((res:any)=>
    {
      this.usernmae = res.data.userName
      this.profilepic = res.data.profilePic
    })
  }

  gotoNotification() {
    this.router.navigate(['Notification']);
  }

  gotoOrders() {
    this.router.navigate(['orders']);
  }
  gotoFoodCategory() {
    this.router.navigate(['foodcategory']);
  }
  gotoKitchen() {
    this.router.navigate(['kitchen']);
  }

  gotocheckout() {
    this.router.navigate(['cart']);
  }
  gotoaboutUs() {
    this.router.navigate(['aboutus']);
  }
  gotoProductDetail() {
    this.router.navigate(['productdetail']);
  }
  gotoFaQ() {
    this.router.navigate(['faq']);
  }

  openDialog(): void {
    localStorage.removeItem('token')
    this.login = localStorage.getItem('token')
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  getproile()
  {
    this.router.navigate(['/profilesetup'])
  }


  homepage()
  {
    this.router.navigate([''])
  }
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./header.component.scss']
})
export class DialogOverviewExampleDialog {
  nextPopup = 1;
  LoginForm: FormGroup;
  RecoverPass: FormGroup
  SingupForm:FormGroup;
  submitted: boolean = false;
  phone: any;
  otp: any;
  phonecode= '+91'
  type: any;
  countrycode: any;
  countryCode: any;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private fb: FormBuilder,private router : Router,private Srvc:NetserviceService) { }

    signinhere(e)
    {
      this.nextPopup = e
    }
  continue(otp) {

  }

  ngOnInit()
  {
    this.Srvc.getJson().subscribe((res:any)=>
    {
      this.countrycode = res
    })

    this.LoginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });

    this.SingupForm = this.fb.group({
      phone: ['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(5)])],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.compose([Validators.required,Validators.minLength(8)])]
    })

    this.RecoverPass = this.fb.group({
      phone: ['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(5)])]
    })
  }

  public errorHandlingSignin = (control: string, error: string) => {
    return this.LoginForm.controls[control].hasError(error);
  }

  public errorHandlingSignup = (control: string, error: string) => {
    return this.SingupForm.controls[control].hasError(error);
  }


  public errorHandlingRevocer = (control: string, error: string) => {
    return this.RecoverPass.controls[control].hasError(error);
  }

  loginSave()
  {
    this.submitted = true;
  const data =
  {
    "email": this.LoginForm.value.email,
    "password":this.LoginForm.value.password
  }
  if(!this.LoginForm.invalid)
  {
    this.Srvc.signIn(data).subscribe((res:any)=>
    {
     if(res.success)
     {
       localStorage.setItem('token',res.data.accessToken)
        window.location.reload()
       //  this.dialogRef.close()
      //  this.router.navigate(['/'])
     }
     else{
       Swal.fire('Oops!',res.message,'error')
     }
    })
  }

  }

  SignUP()
  {
    this.type = 'signupVerification';
    this.submitted = true;
    this.phone = this.SingupForm.value.phone;
    const data =
    {
      "phone":this.SingupForm.value.phone,
      "email":this.SingupForm.value.email,
      "password":this.SingupForm.value.password,
      "countryCode":this.countryCode == null ? this.phonecode : this.countryCode
    }
    if(!this.SingupForm.invalid)
    {
      this.Srvc.signUp(data).subscribe((res:any)=>
      {
       if(res.success)
       {
        this.nextPopup = 4; 
       }
       else{
        Swal.fire('Oops!',res.message,'error')
      } 
      })
    }


  }


  alphabate(event)
  {
    console.log(event)
   // alert(event.keyCode)
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 65 && charCode < 90) || (charCode > 97 && charCode < 122)) {
      return false;
    }
    return true;
  }

  onOtpChange(event)
  {
    this.otp = event;

  }

  verifyOtp()
  {
    
    const data=
    {
      "otp":this.otp,
      "phone":this.phone,
      "countryCode":this.countryCode == null ? this.phonecode : this.countryCode,
      "type":this.type
    }
    this.Srvc.verifyPhone(data).subscribe((res:any)=>
    {
      if(res.success)
      {
        localStorage.setItem('token',res.data.accessToken)
        window.location.reload()
      }
      else{
        Swal.fire('Oops!',res.message,'error')
      }
    })
  }

  Revocverpass(value)
  {
    this.submitted =true
    this.type = 'normal'
    const data=
    {
      "countryCode":this.countryCode == null ? this.phonecode : this.countryCode,
      "phone":this.RecoverPass.value.phone
    }
    if(!this.RecoverPass.invalid)
    {
      this.Srvc.forgotPassword(data).subscribe((res:any)=>
      {
        if(res.success)
          {
            this.nextPopup = value;
          }
          else{
            Swal.fire('Oops!',res.message,'error')
          }
      })
    }

  }

  someMethod(value)
  {
    this.countryCode = value;
  }
}
