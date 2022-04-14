import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../constants/api.constants';
import { Observable } from 'rxjs';
import { WebStorageService } from '../web-storage/web-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private userId: string;
  constructor(private httpClient: HttpClient, private webStorageService: WebStorageService) {
    const { uid = '' } = this.webStorageService.getStorageValue('USER_DETAILS');
    this.userId = uid;
  }

  public getResumeDetails(): Observable<any> {
    return this.httpClient.get(API.GET_RESUME_DETAILS + `/${this.userId}.json`);
  }

  public getResumeDetailsByUserId(userId: string): Observable<any> {
    return this.httpClient.get(API.GET_RESUME_DETAILS + `/${userId}.json`);
  }

  public updateResumeDetails(params: any): Observable<any> {
    const httpParams = {
      [this.userId]: params,
    };
    return this.httpClient.patch(API.UPDATE_RESUME_DETAILS, httpParams);
  }

  public getResumeStats(params: any): Observable<any> {
    const httpParams = {
      params,
    };
    return this.httpClient.get(API.GET_RESUME_DETAILS, httpParams);
  }

  public downloadResume(params: any): Observable<any> {
    const httpParams = {
      params,
    };
    return this.httpClient.get(API.GET_RESUME_DETAILS, httpParams);
  }

  public changeUserPassword(params): Observable<any> {
    const httpParams = {
      params,
    };
    return this.httpClient.post(API.GET_RESUME_DETAILS, httpParams);
  }

  public deleteUserAccount(params): Observable<any> {
    const httpParams = {
      params,
    };
    return this.httpClient.post(API.GET_RESUME_DETAILS, httpParams);
  }
}
