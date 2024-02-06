import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { AuthService } from './auth.service';
import { tapResponse } from '@ngrx/operators';
import { Router } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { AuthRequest } from '../utils/models/auth-request';
import { AuthResponse } from '../utils/models/auth-response';
import { jwtDecode } from 'jwt-decode';

interface AuthState {
    token: string;
}

const initialState: AuthState = {
    token: '',
};

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, authService = inject(AuthService), router = inject(Router)) => ({
        login: rxMethod<AuthRequest>(
            pipe(
                switchMap(({ email, password }) =>
                    authService.login(email, password)
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
                            }))

                ))),
        logout(): void {
            localStorage.removeItem('token');
            patchState(store, { token: '' });
            router.navigate(['/login']);
        },
        isAuth(): boolean {
            try {
                // const token = store.token() does not working
                const token = localStorage.getItem('token') || '';
                const decodedToken: { exp: number } = jwtDecode(token);
                const isExpired: boolean = decodedToken.exp < Date.now() / 1000;
                return !isExpired;
            } catch (e) {
                return false;
            }
        }
    }))
);