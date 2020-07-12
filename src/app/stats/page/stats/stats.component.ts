import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
})
export class StatsComponent implements OnInit {
  public statsNavigationRoutes = [
    {
      routeLink: "",
      routeLabel: "STATS",
    },
  ];
  constructor() {}

  ngOnInit(): void {
    var lineCtx = (<HTMLCanvasElement>(
      document.getElementById("myChart")
    )).getContext("2d");
    var pieCtx = (<HTMLCanvasElement>(
      document.getElementById("myPieChart")
    )).getContext("2d");
    var myDoughnutChart = new Chart(pieCtx, {
      type: "doughnut",
      data: {
        labels: ["Mobile", "Tablet", "Desktop"],
        datasets: [
          {
            data: [20, 40, 40],
            backgroundColor: ["#878BB6", "#4ACAB4", "#FF8153"],
          },
        ],
      },
    });

    var chart = new Chart(lineCtx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },

      // Configuration options go here
      options: {},
    });
  }
}
