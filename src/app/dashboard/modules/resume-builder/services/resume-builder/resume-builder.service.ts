import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResumeBuilderService {
  private dataSource = new BehaviorSubject({});
  public resumeData = this.dataSource.asObservable();

  constructor() {}

  modifyData(data: any) {
    this.dataSource.next(data);
  }
}
