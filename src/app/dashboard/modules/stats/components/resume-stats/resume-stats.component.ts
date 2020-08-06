import { Component, OnInit } from "@angular/core";
import { CoreService } from "src/app/core/services/core/core.service";

@Component({
  selector: "app-resume-stats",
  templateUrl: "./resume-stats.component.html",
  styleUrls: ["./resume-stats.component.scss"],
})
export class ResumeStatsComponent implements OnInit {
  lineChartOptions = {
    responsive: true,
  };

  lineChartData = [
    { data: [0, 5, 7, 0, 3, 0, 9], label: "Average Views", barThickness: 16 },
  ];

  lineChartLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  lineChartColors = [{ backgroundColor: "#1278ed", borderColor: "#1278ed" }];
  pieChartOptions = {
    responsive: true,
  };

  pieChartData = [{ data: [330, 600, 260], label: "Account A" }];

  pieChartLabels = ["Desktop", "Tablet", "Mobile"];
  pieChartColors = [{ backgroundColor: ["#1278ed", "#00A124", "#DC9100"] }];

  constructor(private coreService: CoreService) {}

  ngOnInit(): void {
    this.coreService.getCvStats("").subscribe(
      (res) => {},
      (err) => {}
    );
  }
}
