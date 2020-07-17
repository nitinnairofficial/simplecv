import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleganceComponent } from './elegance.component';

describe('EleganceComponent', () => {
  let component: EleganceComponent;
  let fixture: ComponentFixture<EleganceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleganceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleganceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
