import { PageloadingService } from '../services/pageloading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError, timeout } from 'rxjs';


@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {
  private activeRequest = 0
  private msgError = "Erro Desconhecido"
  timeoutValue = 60000;

  constructor(
    private loading:PageloadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.activeRequest ===0 && request.headers.get('loading')){
      this.loading.show()
    }
    this.activeRequest++;
    return next.handle(request)
    .pipe(
      timeout(this.timeoutValue),
      catchError((error: Error) => {
        if (error.name === 'TimeoutError') {
          const timeoutError = new HttpErrorResponse({
            error: 'Timeout, verifique sua conexão!',
            status: 408,
            statusText: 'Request Timeout'
          });
          return throwError(()=>timeoutError );
        }
          return throwError(()=> new HttpErrorResponse({}) || this.msgError);
      }),
      finalize(()=>{
        this.activeRequest--
        if(this.activeRequest===0){
          this.loading.hide()
        }
      })
  )
  }
}
