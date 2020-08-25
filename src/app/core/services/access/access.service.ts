import { Injectable } from '@angular/core';
import { WebStorageService } from '../web-storage/web-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  constructor(private webStorageService: WebStorageService) {}

  public setLoginInfo(info) {
    this.webStorageService.setStorageValue('USER_DETAILS', info);
  }

  public getLoginInfo() {
    return this.webStorageService.getStorageValue('USER_DETAILS') || {};
  }

  public isLoggedIn() {
    const loginInfo = this.getLoginInfo();
    return loginInfo && Object.entries(loginInfo).length ? true : false;
  }
}
