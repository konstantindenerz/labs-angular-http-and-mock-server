import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { RETRY_COUNT } from './retry-count';

export const retryWait = 3000;

export function retryInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const count = req.context.get(RETRY_COUNT);
  return next(req).pipe(
    retry({ count, delay: retryWait })
  );
}
