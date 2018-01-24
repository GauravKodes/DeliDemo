import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocheLeftSidebarComponent } from './roche-left-sidebar.component';

describe('RocheLeftSidebarComponent', () => {
  let component: RocheLeftSidebarComponent;
  let fixture: ComponentFixture<RocheLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocheLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocheLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
