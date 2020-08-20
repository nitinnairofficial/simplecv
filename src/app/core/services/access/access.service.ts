import { Injectable } from '@angular/core';
import { WebStorageService } from '../web-storage/web-storage.service';
import { LOGIN_INFO } from '../../constants/core.constants';

@Injectable({
  providedIn: 'root',
})
export class AccessService {
  constructor(private webStorageService: WebStorageService) {}

  public setLoginInfo(info) {
    this.webStorageService.setStorageValue(LOGIN_INFO, info);
  }

  public getLoginInfo() {
    return this.webStorageService.getStorageValue(LOGIN_INFO) || {};
  }

  public isLoggedIn() {
    const loginInfo = this.getLoginInfo();
    return loginInfo && Object.entries(loginInfo).length ? true : false;
  }
}
