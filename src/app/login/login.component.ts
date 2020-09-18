import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  message: string = '';
  login:boolean=true; 
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    if(parseInt(this.accountService.getLogin())==1){
      this.login=false;
    }
  }

  signIn() {
    var result: any;

    this.accountService.login(this.username, this.password).subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        this.message=err.error.message;
      },
      () => {
        
        this.accountService.setToken(result.object.accessToken);
        this.accountService.setLogin(1);
        this.accountService.setACC(result.object.userName);
        if (this.username!=='thanh'){
        this.router.navigateByUrl('/dashboard');
        }
        else{
          this.router.navigateByUrl('/admin');
        }
      }
    );
  }
}
