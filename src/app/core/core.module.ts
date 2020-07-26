import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CacheInterceptorService } from "./interceptors/cacheInterceptor.service";
import { HttpCacheService } from "./services/cache/cache.service";
import { HttpInterceptorService } from "./interceptors/httpInterceptor.service";
import { AccessService } from "./services/access/access.service";
import { WebStorageService } from "./services/web-storage/web-storage.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptorService,
      multi: true,
    },
    HttpCacheService,
    AccessService,
    WebStorageService,
  ],
})
export class CoreModule {}
