import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeFaqsComponent } from './resume-faqs.component';

describe('ResumeFaqsComponent', () => {
  let component: ResumeFaqsComponent;
  let fixture: ComponentFixture<ResumeFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
