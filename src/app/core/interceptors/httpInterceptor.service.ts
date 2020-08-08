import { Injectable } from "@angular/core";

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthenticationService } from "src/app/authentication/services/authentication/authentication.service";
import { AccessService } from "../services/access/access.service";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService,
    private accessService: AccessService
  ) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let postReq;
    /**
     * Get Token from localstorage
     */
    const loginInfo = this.accessService.getLoginInfo();
    /**
     * Clone the request object and set the headers
     */
    if (loginInfo && loginInfo.token) {
      postReq = req.clone({
        // Set token
        headers: req.headers
          .set("x-access-token", loginInfo.token)
          .set("acc_name", "local"),
      });
    } else {
      postReq = req.clone();
    }

    return next.handle(postReq).pipe(
      map(this.handleResponse.bind(this)),
      catchError(
        (err: any): Observable<any> => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 0) {
              // show no internet when status is 0
              return throwError("No internet");
            } else if (err.status === 401) {
              // Logout when the token expires
              this.logout();
              return throwError(err.error || "Unauthorized");
            }
          }
          return throwError(err);
        }
      )
    );
  }

  /**.
   * Handle response
   */
  private handleResponse(event: HttpEvent<any>): HttpEvent<any> {
    return event;
  }

  private logout() {
    this.authenticationService.logout();
  }
}
