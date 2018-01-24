import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocheNavigationComponent } from './roche-navigation.component';

describe('RocheNavigationComponent', () => {
  let component: RocheNavigationComponent;
  let fixture: ComponentFixture<RocheNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocheNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocheNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
