import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AjaxServiceService } from './components/services/ajax-service.service'

import { AppComponent } from './app.component';
import { RocheNavigationComponent } from './components/roche-navigation/roche-navigation.component';
import { RocheLeftSidebarComponent } from './components/roche-left-sidebar/roche-left-sidebar.component';
import { RocheRightSidebarComponent } from './components/roche-right-sidebar/roche-right-sidebar.component';
import { RocheCanvasAreaComponent } from './components/roche-canvas-area/roche-canvas-area.component';

import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    RocheNavigationComponent,
    RocheLeftSidebarComponent,
    RocheRightSidebarComponent,
    RocheCanvasAreaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AjaxServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
