import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetDataService {

  constructor(private http: Http) {}

  success(url){
 return   this.http.get(url)
    .map((response) => response.json()
    )
   .subscribe(
       (data) => console.log(data)
     );
       
  }

}
