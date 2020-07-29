import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API } from "../../constants/api.constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  constructor(private httpClient: HttpClient) {}

  public getCvDetails(params: any): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.get(API.GET_CV_DETAILS);
  }

  public updateCvDetails(params: any): Observable<any> {
    const httpParams = {
      resumeId: "nitinnairdev@gmail.com",
      emailId: "nitinnairdev@gmail.com",
      selectedTemplate: "nitinnairdev@gmail.com",
      params: params,
    };
    return this.httpClient.post(API.UPDATE_CV_DETAILS, httpParams);
  }

  public getCvStats(params: any): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.get(API.GET_CV_DETAILS, httpParams);
  }

  public downloadCV(params: any): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.get(API.GET_CV_DETAILS, httpParams);
  }

  public changeUserPassword(params): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.post(API.GET_CV_DETAILS, httpParams);
  }

  public deleteUserAccount(params): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.post(API.GET_CV_DETAILS, httpParams);
  }
}
