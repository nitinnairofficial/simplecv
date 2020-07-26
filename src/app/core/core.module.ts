import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CacheInterceptorService } from "./interceptors/cacheInterceptor.service";
import { HttpCacheService } from "./services/cache/cache.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptorService,
      multi: true,
    },
    HttpCacheService,
  ],
})
export class CoreModule {}
