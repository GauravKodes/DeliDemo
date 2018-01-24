import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocheRightSidebarComponent } from './roche-right-sidebar.component';

describe('RocheRightSidebarComponent', () => {
  let component: RocheRightSidebarComponent;
  let fixture: ComponentFixture<RocheRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocheRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocheRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
