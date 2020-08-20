import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BerlinComponent } from './berlin.component';

describe('EleganceComponent', () => {
  let component: BerlinComponent;
  let fixture: ComponentFixture<BerlinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BerlinComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BerlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
