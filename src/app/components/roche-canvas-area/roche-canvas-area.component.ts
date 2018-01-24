import { Component, OnInit } from '@angular/core';

import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

import {AjaxServiceService} from '../services/ajax-service.service';

//import the native angular http and respone libraries
import { Http, Response } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";            
const URL = 'http://localhost:4200/api/upload';

@Component({
  selector: 'app-roche-canvas-area',
  templateUrl: './roche-canvas-area.component.html',
  styleUrls: ['./roche-canvas-area.component.css']
})
export class RocheCanvasAreaComponent implements OnInit {

  jsonData:any=[];

  constructor( private AjaxService : AjaxServiceService) {

   }
   
   public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
   
  //  sendData(uploader) {
  //   uploader = new FileUploader({url: 'http://localhost:4200/api' });
  //    console.log(uploader);
  //  }

  ngOnInit() { 

    this.AjaxService.getJson().subscribe(result=>{
      //console.log(result);
      this.jsonData=result;
      //this.transferData=result;
     console.log(this.jsonData);
    });

      //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
        this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      //overide the onCompleteItem property of the uploader so we are 
      //able to deal with the server response.
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
              console.log("ImageUpload:uploaded:", item, status, response);
          };
  
  }

}
