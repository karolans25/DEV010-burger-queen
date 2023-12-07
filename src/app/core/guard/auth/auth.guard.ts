import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = new Router();
  const role = sessionStorage.getItem('role');

  if(sessionStorage.getItem('idUser') !== null && sessionStorage.getItem('idUser') !== '' ) {
    if(route.url.length > 0) {
      const menu = route.url[0].path;
      if(menu === 'dashboard'){
        if(role){
          return true;
        } else {
          // toastr.warning('You don\'t have access');
          alert('You don\'t have access. Contact the admin to check.');
          router.navigate(['']);
          return false;
        }
      } else {
        return true;
      }
      return true;
    } else {
      return true;
    }
  }
  router.navigate(['login']);
  return false;
};
