import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface CacheContent {
  expiry: number;
  value: any;
}

@Injectable()
export class HttpCacheService {
  private store: Map<string, CacheContent> = new Map<string, CacheContent>();
  private readonly DEFAULT_MAX_AGE = 15; // in min

  public burstCache$: Subject<string> = new Subject<string>();

  constructor() {
    this.burstCache$.subscribe((url) => {
      this.findAndDeleteCache(url);
    });
  }

  /**
   *
   * @description: Store response into cache
   */
  public setCache(req: HttpRequest<any>, resp: HttpResponse<any>, expiry: number = this.DEFAULT_MAX_AGE): void {
    expiry = expiry * 1000 * 60;
    this.store.set(req.urlWithParams, { value: resp, expiry: Date.now() + expiry });
  }

  /**
   * @description: Retrieve response from cache
   */
  public getCache(req: HttpRequest<any>): HttpResponse<any> | null {
    const key = req.urlWithParams;
    if (this.store.has(key)) {
      const cacheVal = this.store.get(key);
      if (!this.isExpired(cacheVal.expiry)) {
        // Not expired
        return cacheVal.value;
      }
      // Expired
      this.store.delete(key);
      return null;
    }
    return null;
  }

  private isExpired(val): boolean {
    return val < Date.now();
  }

  public clearCache() {
    this.store.clear();
  }

  public deleteItem(key: string) {
    this.store.delete(key);
  }

  public findAndDeleteCache(url = '') {
    if (!url) {
      return;
    }
    this.store.forEach((value, key) => {
      if (key.indexOf(url) > -1) {
        this.deleteItem(key);
      }
    });
  }
}
