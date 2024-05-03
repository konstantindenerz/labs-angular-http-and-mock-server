import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { CONFIG } from './core/config/config.token';
import { retryInterceptor } from './core/http/retry.interceptor';
import { authInterceptor } from './security/auth.interceptor';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log('🔥', error)
  }

}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    { provide: CONFIG, useValue: environment },
    provideHttpClient(withInterceptors([retryInterceptor, authInterceptor])),
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
};
