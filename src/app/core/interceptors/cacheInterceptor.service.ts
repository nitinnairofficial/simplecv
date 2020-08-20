import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpCacheService } from '../services/cache/cache.service';
import { APIS_TO_CACHE } from '../constants/core.constants';

@Injectable()
export class CacheInterceptorService implements HttpInterceptor {
  constructor(private _cache: HttpCacheService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    /**
     * @description: Check to see if the API needs to be cached from the
     *                ApisToCache array
     *                else fetch the data from server
     */
    const url = req.url;
    const found: any = APIS_TO_CACHE.find((api) => {
      return url.indexOf(api.url) > -1;
    });

    if (found) {
      const cache = this._cache.getCache(req) || null;
      if (cache) {
        return of(cache);
      }

      return next.handle(req).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            this._cache.setCache(req, event, found.expiry);
          }
        })
      );
    }

    return next.handle(req);
  }
}
