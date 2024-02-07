import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../data-access/auth.store';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authStore = inject(AuthStore);

  if (!authStore.isAuth()) {
    console.warn('token expired or not found, redirecting to login page...')
    router.navigate(['/login']);
  }

  return authStore.isAuth();
};
