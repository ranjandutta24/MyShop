import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    return this.auth.user$.pipe(
      map((user) => {
        if (user) return true;

        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
