import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService) as AuthService;

   if (authService.isAuthenticated() && authService.isAnAdmin) {
     return true;
   } else {
     return false;
   }
};
