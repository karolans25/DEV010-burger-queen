import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private builder:FormBuilder, private auth: AuthService, private router: Router) {
      sessionStorage.clear();
      localStorage.clear();
  }

  hide = true;
  isLoading = false;
  loginForm!: FormGroup;
  // roles = 

  ngOnInit():void{
    this.createForm();
  }

  ngOnDestroy() {
    if (this.auth.loginResponse$) {
      this.auth.loginResponse$.unsubscribe();
    }
  }

  createForm():void {
    this.loginForm = this.builder.group({
      // id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  proceedLogin(){
    if(this.loginForm.valid) {
      this.auth.proceedLoginUser(this.loginForm.value);
      this.auth.loginResponse$.subscribe(res => {
        // if (res.error !== null) this.toastr.warning(res.error?.message);
        if (res.error !== null) alert(res.error?.message);
        if (res.data !== null) {
          // this.toastr.success(`Welcome ${res.data.user.name} to Burger Queen`, 'Logged Succesfully');
          alert(`Welcome ${res.data.user.name} to Burger Queen \n Logged Succesfully`);
          this.router.navigate(['dashboard']);
          // const role = res.data.user.role;
          // if(role == 'admin') {
          //   this.router.navigate(['admin-dashboard']);
          // } else if (role == 'chef'){
          //   this.router.navigate(['chef-dashboard']);
          // } else if (role == 'waiter'){
          //   this.router.navigate(['waiter-dashboard']);
          // }
          // this.router.navigate(['login']);
        }
      });
    } else {
      // this.toastr.warning('Please enter valid data');
      alert('Please enter valid data');
    }
  }

}
