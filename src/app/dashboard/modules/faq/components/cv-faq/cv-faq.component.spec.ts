import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFaqComponent } from './cv-faq.component';

describe('CvFaqComponent', () => {
  let component: CvFaqComponent;
  let fixture: ComponentFixture<CvFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
