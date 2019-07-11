import { Component, OnInit } from '@angular/core';
import { info } from './info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Info-page';
  info = info;
  ngOnInit() {
  }
}
