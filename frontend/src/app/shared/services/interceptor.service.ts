import { Injectable } from '@angular/core';
import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest }
from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
 intercept( request: HttpRequest<any>, next: HttpHandler ):Observable<HttpEvent<any>> {
  request.clone({
    setHeaders: {
      'Content-Type': 'json/application'
    }
  })
  return next.handle(request);
 }
}

