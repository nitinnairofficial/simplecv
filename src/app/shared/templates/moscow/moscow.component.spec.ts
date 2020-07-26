import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoscowComponent } from './moscow.component';

describe('MoscowComponent', () => {
  let component: MoscowComponent;
  let fixture: ComponentFixture<MoscowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoscowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoscowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
