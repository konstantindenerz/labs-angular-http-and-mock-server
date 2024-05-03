import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit, Signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EMPTY, firstValueFrom, Observable } from 'rxjs';
import { User } from './user/user.interface';
import { UserService } from './user/user.service';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  user$: Observable<User> = EMPTY;
  readonly userService = inject(UserService);

  // user: Signal<User | undefined> = this.userService.loadUserProfileSignal();

  ngOnInit(): void {
    this.user$ = this.userService.loadUserProfile();
  }

   create() {
    this.userService.create({ username: 'test@mail' }).subscribe();
  }
}

// TODO: pass context to interceptor
