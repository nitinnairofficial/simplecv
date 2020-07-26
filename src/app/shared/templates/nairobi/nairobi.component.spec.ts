import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NairobiComponent } from './nairobi.component';

describe('NairobiComponent', () => {
  let component: NairobiComponent;
  let fixture: ComponentFixture<NairobiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NairobiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NairobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
