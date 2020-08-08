import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WebStorageService } from "src/app/core/services/web-storage/web-storage.service";

@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.component.html",
  styleUrls: ["./verify-email.component.scss"],
})
export class VerifyEmailComponent implements OnInit {
  public userEmail: string;
  constructor(
    private router: Router,
    private webStorageService: WebStorageService
  ) {}

  ngOnInit(): void {
    const userDetail = this.webStorageService.getStorageValue("USER_DETAILS");
    this.userEmail = userDetail && userDetail.email;
  }

  public navigateToRoute(route) {
    this.router.navigate([route]);
  }
}
