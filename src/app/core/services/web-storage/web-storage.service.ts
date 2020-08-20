import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService {
  private defaultStorage: string;

  constructor() {
    this.initializeStorageService();
  }

  private initializeStorageService() {
    try {
      this.setLocalStorageValue('checkingStorage', '1');
      if (this.getLocalStorageValue('checkingStorage')) {
        this.defaultStorage = 'LocalStorage';
        this.removeLocalStorageValue('checkingStorage');
      }
    } catch (e) {
      this.defaultStorage = 'Cookie';
    }
  }

  public setStorageValue(key, value = {}) {
    this[`set${this.defaultStorage}Value`](key, JSON.stringify(value));
  }

  public getStorageValue(key) {
    return this[`get${this.defaultStorage}Value`](key);
  }

  public removeStorageValue(key) {
    this[`remove${this.defaultStorage}Value`](key);
  }

  public setSessionStorageValue(key, value = {}) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getSessionStorageValue(key) {
    const value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  public removeSessionStorageValue(key) {
    sessionStorage.removeItem(key);
  }

  private setLocalStorageValue(key, value) {
    localStorage.setItem(key, value);
  }

  private getLocalStorageValue(key) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  private removeLocalStorageValue(key) {
    localStorage.removeItem(key);
  }

  public clearAll() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
