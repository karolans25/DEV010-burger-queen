import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BURGER_CONSTANTS } from 'src/app/core/constant/burgerConstant';
import { AuthService } from 'src/app/core/services/auth/authentication.service';

interface Menu {
  path: string,
  text: string,
  icon: string,
  roles: string[]
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  menus: Menu[] = [];
  filteredMenus: Menu[] = [];
  role: string = '';

  redirections: { [key: string]: string } = {
    waiter: 'dashboard/waiter/orders',
    chef: 'dashboard/chef/orders',
    admin: 'dashboard/admin/users',
  };

  constructor(private route: Router, private auth: AuthService){
    this.menus = BURGER_CONSTANTS.menus as Menu[];
    
    const roles = BURGER_CONSTANTS.roles;

    const role = sessionStorage.getItem('role');
    if (role){
      if(roles.includes(role)){
        this.role = role;
      }
    }

    this.menus.forEach((element: Menu) => {
      if(element.roles.includes(this.role)) this.filteredMenus.push(element);
      // console.log(this.role);
      // console.log(element.roles);
      // const isRolePresent = element.roles.find((role: string) => role = this.role);
      // console.log(isRolePresent);
      // debugger;
      // if (isRolePresent !== undefined){
      //   this.filteredMenus.push(element);
      // }
    });

  }

  ngOnInit(){
    this.auth.systemUser$.subscribe((user) => {
      if (!user) {
        this.route.navigate(['login']);
        return;
      } else {
        const route = this.redirections[user.role];
        this.route.navigate([route]);
      }
    });
  }
}
