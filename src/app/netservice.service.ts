import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetserviceService {

  private transfer  = new BehaviorSubject('');
  public $transfer = this.transfer.asObservable();

  baseurl = 'https://appgrowthcompany.com:3128/';
  constructor(private http: HttpClient,)
  {


   }

signUp(data)
{
  return this.http.post<any>(`${this.baseurl}api/app/signup`,data);
}

signIn(data)
{
  return this.http.post<any>(`${this.baseurl}api/app/signin`,data)
}

forgotPassword(data)
{
  return this.http.post<any>(`${this.baseurl}api/app/forgotPassword`,data);
}

verifyPhone(data)
{
  return this.http.post<any>(`${this.baseurl}api/app/verifyPhone`,data);
}

getJson()
{
  return this.http.get<any>('assets/data.json')
}

getProUpdated(data)
{
  const authorization = localStorage.getItem('token');
  const httpOptions = {
    headers: new HttpHeaders({ 'authorization': authorization })
  }
  const fd = new FormData();
   fd.append('firstName',data.firstName)
   fd.append('profilePic',data.profilePic)
   fd.append('lastName',data.lastName)
   fd.append('email',data.email)
   fd.append('countryCode',data.countryCode)
   fd.append('userName',data.userName)
   fd.append('lat',data.lat)
   fd.append('lng',data.lng)
   fd.append('address',data.address)
   fd.append('pinCode',data.pinCode)
   return this.http.put<any>(`${this.baseurl}api/app/updateProfile`,fd,httpOptions);
}

getProfileData()
{
  const authorization = localStorage.getItem('token')
  const httpOptions =
  {
    headers : new HttpHeaders({'Authorization':authorization})
  }
  return this.http.get<any>(`${this.baseurl}api/app/getProfile`,httpOptions)
}

transferData(value)
{
  this.transfer.next(value)
}

}
