import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  login:boolean=true; 
  check:boolean=true; 
  username:string="";
  constructor(
    private router: Router,
    private authService: AccountService
  ) {}

  ngOnInit(): void {
    this.username=this.authService.getAcc();
    if(parseInt(this.authService.getLogin())==1){
      this.login=false;
    }
  }
 
  Sigin(){
    this.router.navigateByUrl('/home');
  }

  Login(){
    this.router.navigateByUrl('/login');
  }

  LogOut(){
    this.authService.clearLocalStorage();
  }

  returnAdmin(){
    this.router.navigateByUrl('/admin');
  }
}
