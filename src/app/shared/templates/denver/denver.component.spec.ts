import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenverComponent } from './denver.component';

describe('DenverComponent', () => {
  let component: DenverComponent;
  let fixture: ComponentFixture<DenverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
