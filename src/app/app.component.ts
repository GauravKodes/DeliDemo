import { Component } from '@angular/core';

import { RocheNavigationComponent } from './components/roche-navigation/roche-navigation.component';
import { RocheLeftSidebarComponent } from './components/roche-left-sidebar/roche-left-sidebar.component';
import { RocheRightSidebarComponent } from './components/roche-right-sidebar/roche-right-sidebar.component';
import { RocheCanvasAreaComponent } from './components/roche-canvas-area/roche-canvas-area.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
