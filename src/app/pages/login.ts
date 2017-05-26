import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { GetDataService } from '../get-data.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router, NavigationStart } from '@angular/router';
import  { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: '../pages/login.html',
  styleUrls: ['../pages/style.css']
})

export class LoginComponent {

  constructor(public router: Router, private auth: AuthService) {}

  form;
  ngOnInit(){
    if(Cookie.get('auth_key'))
        {
          this.router.navigate(['/apps/dashboard']);
        }
    
  this.form = new FormGroup({
    email: new FormControl("admin@nfsg.com", Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    password: new FormControl("", Validators.compose([
      Validators.required
    ]))
  });
  }
  onSubmit = function(user){
     console.log(user);
  this.auth.authenticatenow(user);
    
  }
  

}

