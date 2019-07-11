import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardComponent } from './info-card.component';
import { info } from '../info';

describe('InfoCardComponent', () => {
  let component: InfoCardComponent;
  let fixture: ComponentFixture<InfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render score in a .score span', () => {
    component.info = info;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    for (const field in info) {
      if (field) {
        expect(compiled.querySelector('.' + field).textContent).toContain(component.keyChange(field));
      }
    }
  });
});
