import { Component } from '@angular/core';
import { BURGER_CONSTANTS } from 'src/app/core/constant/burgerConstant';

interface Menu {
  path: string,
  text: string,
  icon: string,
  roles: string[]
}

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  // menu: { [key: string] : string | []} = { }
  menus: Menu[] = [];
  filteredMenus: Menu[] = [];
  role: string = '';

  constructor(){
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
}
