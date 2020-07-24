import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.component.html",
  styleUrls: ["./verify-email.component.scss"],
})
export class VerifyEmailComponent implements OnInit {
  public userEmail: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    const userDetail = JSON.parse(localStorage.getItem("user"));
    this.userEmail = userDetail && userDetail.email;
  }

  public navigateToRoute(route) {
    this.router.navigate([route]);
  }
}
