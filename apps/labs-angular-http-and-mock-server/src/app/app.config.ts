import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { CONFIG } from './core/config/config.token';
import { authInterceptor } from './security/auth.interceptor';
import { retryInterceptor } from './core/http/retry.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    { provide: CONFIG, useValue: environment },
    provideHttpClient(withInterceptors([retryInterceptor, authInterceptor]))
  ]
};
