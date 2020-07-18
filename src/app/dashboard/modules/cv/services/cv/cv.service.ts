import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CvService {
  private dataSource = new BehaviorSubject({});
  public cvData = this.dataSource.asObservable();

  constructor() {}

  modifyData(data: any) {
    this.dataSource.next(data);
  }
}
