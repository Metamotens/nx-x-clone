import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '@x-clone/login';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const authStore = inject(AuthStore);

  if (authStore.isAuth()) {
    req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${authStore.token()}`) })
  } else {
    localStorage.removeItem('token');
    router.navigate(['/login']);
  }

  return next(req);
};
