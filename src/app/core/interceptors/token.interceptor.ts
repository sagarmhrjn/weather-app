import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  baseUrl = environment.base_url;
  apiKey = environment.weather_map_api_key;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let params = new HttpParams();
    params = params.append('appId', this.apiKey);
    if (this.apiKey) {
      request = request.clone({
        params:params,
        url: this.baseUrl + request.url,
      });
    } else {
      request = request.clone({
        url: this.baseUrl + request.url,
      });
    }

    return next.handle(request);
  }
}
