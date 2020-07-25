import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API } from "../../constants/api.constants";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  constructor(private httpClient: HttpClient) {}

  public getCvData(params: any) {
    const httpParams = {
      params: params,
    };
    return this.httpClient.get(API.GET_CV_DATA, httpParams);
  }
}
