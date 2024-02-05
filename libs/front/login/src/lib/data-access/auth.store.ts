import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { AuthService } from './auth.service';
import { tapResponse } from '@ngrx/operators';
import { Router } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { AuthRequest } from '../utils/models/auth-request';
import { AuthResponse } from '../utils/models/auth-response';

interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem('token') || null,
};

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, authService = inject(AuthService), router = inject(Router)) => ({
        login: rxMethod<AuthRequest>(
            pipe(
                switchMap(({ email, password }) =>
                    authService.login(email, password).pipe(tapResponse({
                        next: ({ accessToken }: AuthResponse) => {
                            JSON.stringify(localStorage.setItem('token', accessToken));
                            patchState(store, { token: accessToken });
                            router.navigate(['/']);
                        },
                        error: () => {
                            localStorage.removeItem('token');
                            patchState(store, { token: null });
                        },
                        complete: () => {
                            console.log('complete');
                        }
                    }))

                )))
    }))
);