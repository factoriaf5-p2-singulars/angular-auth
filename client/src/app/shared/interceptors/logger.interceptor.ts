import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, of } from 'rxjs';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`REQUEST is on its way to ${req.url}`);
  next(req)
    .pipe(catchError((e) => of(e)))
    .subscribe((r) => console.log(r));
  return next(req);

  // let userData = JSON.parse(localStorage.getItem("userData"))

  // saveToLocalStorage(){

  // }

};
