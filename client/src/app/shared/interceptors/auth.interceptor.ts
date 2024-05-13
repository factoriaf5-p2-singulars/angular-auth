import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req)
  return next(req).pipe(
    tap((event: any) => {
      window.localStorage.setItem('token', event.body?.accessToken);
    })
  );
};

