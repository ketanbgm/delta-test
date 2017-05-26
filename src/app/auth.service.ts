import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

declare var Storages: any;
@Injectable()
export class AuthService {
 isAuthenticated: boolean = false;
  constructor( private http: Http, private router: Router) { }
authenticatenow(usercreds){
       var headers = new Headers();
     //  var creds = 'email=' + usercreds.email + '&password=' + usercreds.password;
       console.log(usercreds);
       headers.append('Content-Type', 'application/X-www-form-urlencoded');

       this.http.post('http://uatserver.info/ctrsapi/ctrsapi/checkLogin', usercreds).subscribe((data) =>
  
       {
          
           if(data.json()) {
               console.log( data.json())
               if(data.json().responseCode == 1000){
                 let storage = Storages.localStorage;
                 Cookie.set('auth_key', data.json().data.userToken);
                
                 this.isAuthenticated = true;
                 this.router.navigate(['/apps/dashboard']);
               }
               else{
                    console.log("invalid");
               }
              
            }else{
                console.log("error");
            }
          }
       )

       }
}
