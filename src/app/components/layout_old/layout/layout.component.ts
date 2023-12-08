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

  // redirections: { [key: string]: string } = {
  //   waiter: 'w',
  //   chef: 'c',
  //   admin: 'a',
  // };

  constructor(private route: Router, private auth: AuthService){
    // this.menus = BURGER_CONSTANTS.menus as Menu[];
    
    // const roles = BURGER_CONSTANTS.roles;

    // let role = sessionStorage.getItem('role');
    // if (role){
    //   if(roles.includes(role)){
    //     this.role = role;
    //   } else {
    //     this.role = '';
    //   } 
    // }
    // console.log(this.role[0]);

    // this.menus.forEach((element: Menu) => {
    //   if(element.roles.includes(this.role)) {
    //     console.log(element.path);
    //     element.path = `${this.role[0]}/${element.path}`;
    //     console.log(element.path);
    //     console.log(element);
    //     this.filteredMenus.push(element);
    //   }
    //   // console.log(this.role);
    //   // console.log(element.roles);
    //   // const isRolePresent = element.roles.find((role: string) => role = this.role);
    //   // console.log(isRolePresent);
    //   // debugger;
    //   // if (isRolePresent !== undefined){
    //   //   this.filteredMenus.push(element);
    //   // }
    // });

  }

  ngOnInit(){
    this.auth.systemUser$.subscribe((user) => {
      if (!user) {
        this.route.navigate(['login']);
        return;
      } else {
        // const route = this.redirections[user.role];
        // this.route.navigate([route]);
        // this.route.navigate(['db/w']);
        this.menus = BURGER_CONSTANTS.menus as Menu[];
    
        const roles = BURGER_CONSTANTS.roles;
    
        let role = sessionStorage.getItem('role');
        if (role){
          if(roles.includes(role)){
            this.role = role;
          } else {
            this.role = '';
          } 
        }
        console.log(this.role[0]);
    
        this.menus.forEach((element: Menu) => {
          let route = '';
          if(element.roles.includes(this.role)) {
            console.log(element.path);
            route = `${this.role[0]}/${element.path}`;
            console.log(element.path);
            console.log(element);
            this.filteredMenus.push({
              path: route, 
              text: element.text,
              icon: element.icon
            } as Menu);
          }
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
    });
  }
}
