import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsloComponent } from './oslo.component';

describe('OsloComponent', () => {
  let component: OsloComponent;
  let fixture: ComponentFixture<OsloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
