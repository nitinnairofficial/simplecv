import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cv-stats",
  templateUrl: "./cv-stats.component.html",
  styleUrls: ["./cv-stats.component.scss"],
})
export class CvStatsComponent implements OnInit {
  lineChartOptions = {
    responsive: true,
  };

  lineChartData = [{ data: [2, 5, 3, 9, 5, 3, 11], label: "Average Views" }];

  lineChartLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  lineChartColors = [
    { backgroundColor: "rgba(48, 112, 212, 0.1)", borderColor: "#1278ed" },
  ];
  pieChartOptions = {
    responsive: true,
  };

  pieChartData = [{ data: [330, 600, 260], label: "Account A" }];

  pieChartLabels = ["Desktop", "Tablet", "Mobile"];
  pieChartColors = [{ backgroundColor: ["#1278ed", "#00A124", "#DC9100"] }];
  constructor() {}

  ngOnInit(): void {}
}
