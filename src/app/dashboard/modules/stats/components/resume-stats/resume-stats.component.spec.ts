import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ResumeStatsComponent } from "./resume-stats.component";

describe("ResumeStatsComponent", () => {
  let component: ResumeStatsComponent;
  let fixture: ComponentFixture<ResumeStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeStatsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
