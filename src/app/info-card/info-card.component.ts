import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() info: object;
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  public objectKeys(object): string[] {
    if (object) {
      return Object.keys(object);
    } else {
      return [];
    }
  }
  
  public isTypeObject(entry): boolean {
    return typeof entry === 'object';
  }
  
  public keyChange(key): string {
    return key.replace('_', ' ');
  }
}
