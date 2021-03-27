import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { NetserviceService } from '../netservice.service.js';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profilesetup',
  templateUrl: './profilesetup.component.html',
  styleUrls: ['./profilesetup.component.scss']
})
export class ProfilesetupComponent implements OnInit {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  profileForm:FormGroup
  submitted:boolean = false;
  @ViewChild("placesRef", { static: true }) placesRef: GooglePlaceDirective;
  zoom: number;
  lat: any;
  phonecode = '+91'
  lng: any;
  profileimg:any;
  country: any;
  state: any;
  image: any;
  countrycode: any;
  countCode: any;
  file: any;
  imagePath: any;
  imgURL: string | ArrayBuffer;
  profilePic: string | ArrayBuffer;
  files: any;
  imgurl = 'https://appgrowthcompany.com:3128/'
  constructor(private fb:FormBuilder,private Srvc:NetserviceService) { 
    this.profileForm = this.fb.group({
      firstname : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.max(8)])],
      lastname: ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(8)])],
      username : ['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(10)])],
      email:['',[Validators.required,Validators.email]],
      address:['',Validators.required],
      zipcode:['',Validators.compose([Validators.minLength(5),Validators.maxLength(6)])],
      phone: ['',Validators.compose([Validators.required,Validators.maxLength(10),Validators.minLength(5)])]
    })
  }

  public errorHandlingSignup = (control: string, error: string) => {
    return this.profileForm.controls[control].hasError(error);
  }


  ngOnInit() {

    this.Srvc.getJson().subscribe((res:any)=>
    {
      this.countrycode = res
    })

this.getProfile();
  }

  getProfile()
  {
    this.Srvc.getProfileData().subscribe((res:any)=>
    {
      this.profileForm.controls['firstname'].setValue(res.data.firstName)
      this.profileForm.controls['lastname'].setValue(res.data.lastName)
      this.profileForm.controls['username'].setValue(res.data.userName)
      this.profileForm.controls['email'].setValue(res.data.email)
      this.profileForm.controls['address'].setValue(res.data.address)
      this.profileForm.controls['zipcode'].setValue(res.data.pinCode)
      this.profileForm.controls['phone'].setValue(res.data.phone)
      this.profileimg = res.data.profilePic;
     // this.profileForm.controls['firstname'].setValue(res.data.firstName)
     this.Srvc.transferData(res.data)
    })
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }

  submitProfile()
  {
    this.submitted = true;
  const data =
  {
    "firstName":this.profileForm.controls['firstname'].value,
    "lastName":this.profileForm.controls['lastname'].value,
    "email":this.profileForm.controls['email'].value,
    "countryCode":this.countCode == null ? this.phonecode : this.countCode,
    "profilePic":this.file,
    "userName":this.profileForm.controls['username'].value,
    "lat":this.lat,
    "lng":this.lng,
    "address":this.profileForm.controls['address'].value,
    "pinCode":this.profileForm.controls['zipcode'].value

  }
  if(!this.profileForm.invalid)
  {
    this.Srvc.getProUpdated(data).subscribe((res:any)=>
    {
      if(res.success)
      {
        Swal.fire('','Updated','success')
        this.getProfile();
        
      }
    })
  }
   
  }

  alphabate(event)
  {
   // alert(event.keyCode)
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 65 && charCode < 90) || (charCode > 97 && charCode < 122)) {
      return false;
    }
    return true;
  }

  number(event)
  {
   // alert(event.keyCode)
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 65 && charCode < 90) || (charCode > 97 && charCode < 122)) {
      return true;
    }
    return false;
  }

  public AddressChange(address: any) {
    //setting address from API to local variable
    console.log(address);
    this.lat = address.geometry.location.lat()
    this.lng = address.geometry.location.lng()
    let length = address.address_components.length
    //this.country = address.address_components[0].long_name;
    this.state = address.address_components[0].long_name;
    this.profileForm.controls['address'].setValue(this.state)

  }

  onChange(event,type) {
    //let file = event.target.files[0];
    this.files = event.target.files;
    this.file = this.files[0];
    
   // if (event.target.files[0].type.indexOf("image/") == 0) {
    this.loadImage(this.file.type, this.files);
   // }
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
       // if (type === 'image') {
          this.image = event.target.result;
       // }
    }
  }
}

loadImage(mimeType, files) {
  if (mimeType.match(/image\/*/) == null) {
    return;
  }
 
  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]);
  reader.onload = _event => {
    this.imgURL = reader.result;
    this.profilePic = this.imgURL;
   
  };
}

someMethod(value)
  {
    this.countCode = value;
  }

}
