import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API } from "../../constants/api.constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  constructor(private httpClient: HttpClient) {}

  public generateToken(params: any): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.get(API.GENERATE_TOKEN, httpParams);
  }

  public getResumeDetails(): Observable<any> {
    return this.httpClient.get(API.GET_RESUME_DETAILS);
  }

  public updateResumeDetails(params: any): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.post(API.UPDATE_RESUME_DETAILS, httpParams);
  }

  public getResumeStats(params: any): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.get(API.GET_RESUME_DETAILS, httpParams);
  }

  public downloadResume(params: any): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.get(API.GET_RESUME_DETAILS, httpParams);
  }

  public changeUserPassword(params): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.post(API.GET_RESUME_DETAILS, httpParams);
  }

  public deleteUserAccount(params): Observable<any> {
    const httpParams = {
      params: params,
    };
    return this.httpClient.post(API.GET_RESUME_DETAILS, httpParams);
  }
}
