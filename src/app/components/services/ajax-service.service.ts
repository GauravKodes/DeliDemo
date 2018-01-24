import { Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class AjaxServiceService implements OnInit {

  
  constructor( private http: Http ) { 

    var obj;
         this.getJson().subscribe(data => this.sharedData=data, error => console.log(error));
  }
  ngOnInit() { }

  sharedData:any=[];
  public getJson(): Observable<any> {
    // put your local address here for getting the Data from AuroraDB.
    return this.http.get("http://localhost:8080/getEmp")
                    .map((res:any) => res.json());
  }
}


// this.getJson().subscribe(result=>{

    //   //console.log(result);
    //   this.sharedData=result;
    // });


    // public getJson(){
  //   return this.http.get('./assets/data.json')
  //     .map(res => res.json());
  // }
