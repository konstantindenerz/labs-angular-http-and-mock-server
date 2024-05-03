import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable, Injector, runInInjectionContext, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { CONFIG } from '../core/config/config.token';
import { RETRY_COUNT } from '../core/http/retry-count';
import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly config = inject(CONFIG);
  private readonly httpClient = inject(HttpClient);
  private readonly injector = inject(Injector);

  loadUserProfile(): Observable<User> {
    return this.httpClient.get<User>(`${this.config.apiBaseUrl}/api/user2`, { context: new HttpContext().set(RETRY_COUNT, 1) });
  }

  create(user: Partial<User>) {
    return this.httpClient.post(`${this.config.apiBaseUrl}/api/user`, user);
  }


  loadUserProfileSignal(): Signal<User | undefined> {
    return runInInjectionContext(this.injector, () =>
      toSignal(this.httpClient.get<User>(`${this.config.apiBaseUrl}/api/user`))
    );
  }
}
