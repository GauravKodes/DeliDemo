import { Component, OnInit } from '@angular/core';

import {AjaxServiceService} from '../services/ajax-service.service';

@Component({
  selector: 'app-roche-canvas-area',
  templateUrl: './roche-canvas-area.component.html',
  styleUrls: ['./roche-canvas-area.component.css']
})
export class RocheCanvasAreaComponent implements OnInit {

  jsonData:any=[];

  constructor( private AjaxService : AjaxServiceService) {

   }

  ngOnInit() { 

    this.AjaxService.getJson().subscribe(result=>{
      //console.log(result);
      this.jsonData=result;
      //this.transferData=result;
     console.log(this.jsonData);
    });
  }

}
