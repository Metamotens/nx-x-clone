import { InjectionToken, inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { AuthService } from './auth.service';
import { tapResponse } from '@ngrx/operators';
import { Router } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { AuthRequest } from '../models/auth-request';
import { AuthResponse } from '../models/auth-response';
import { jwtDecode } from 'jwt-decode';

interface AuthState {
    token: string;
}

const initialState: AuthState = {
    token: '',
};

const AUTH_STATE = new InjectionToken<AuthState>('AuthState', {
    factory: () => initialState,
});

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState(() => inject(AUTH_STATE)),
    withMethods((store, authService = inject(AuthService), router = inject(Router)) => ({
        login: rxMethod<AuthRequest>(
            pipe(
                switchMap(({ email, password }) => authService.login(email, password)
                    .pipe(
                        tapResponse({
                            next: ({ accessToken }: AuthResponse) => {
                                localStorage.setItem('token', accessToken);
                                patchState(store, { token: accessToken });
                            },
                            error: () => {
                                localStorage.removeItem('token');
                                patchState(store, { token: '' });
                            },
                            complete: () => {
                                router.navigate(['/posts']);
                                console.log('Login complete');
                            }
                        })
                    )
                )
            )
        ),
        logout(): void {
            localStorage.removeItem('token');
            patchState(store, { token: '' });
            router.navigate(['/login']);
        },
        isAuth(): boolean {
            try {
                const token = localStorage.getItem('token') || '';
                const decodedToken: { exp: number } = jwtDecode(token);
                const isExpired: boolean = decodedToken.exp < Date.now() / 1000;
                return !isExpired;
            } catch (e) {
                return false;
            }
        }
    })),
    withHooks({
        onInit(store) {
            patchState(store, { token: localStorage.getItem('token') || '' });
        }
    }),
);