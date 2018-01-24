import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocheCanvasAreaComponent } from './roche-canvas-area.component';

describe('RocheCanvasAreaComponent', () => {
  let component: RocheCanvasAreaComponent;
  let fixture: ComponentFixture<RocheCanvasAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocheCanvasAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocheCanvasAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
