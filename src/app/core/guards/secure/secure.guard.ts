import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "src/app/authentication/services/authentication/authentication.service";

@Injectable({
  providedIn: "root",
})
export class SecureGuard implements CanActivate {
  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authenticationService.isLoggedIn) {
      this.router.navigate(["/dashboard"]);
    }
    return true;
  }
}
