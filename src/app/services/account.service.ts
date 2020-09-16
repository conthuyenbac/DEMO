import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private api: API //inject API class
  ) { }

  login(username: string, password: string) {
    return this.api.post('/api/Account/login', {
      "username": username,
      "password": password
    });
  }

  setToken(token) {
    return localStorage.setItem('token', token);
  }
  
  setLogin(token) {
    return localStorage.setItem('isLogged', token);
  }

  setACC(acc){
    return localStorage.setItem('UserName', acc);
  }

  getToken() {
    return localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
  }

  getLogin(){
    return localStorage.getItem('isLogged') ? localStorage.getItem('isLogged') : sessionStorage.getItem('isLogged');
  }

  getAcc(){
    return localStorage.getItem('UserName') ? localStorage.getItem('UserName') : sessionStorage.getItem('UserName');
  }

  clearLocalStorage(){
    localStorage.removeItem('token');
    localStorage.setItem("isLogged","0");
    localStorage.setItem('UserName', "");
    location.reload(true);
  }
}
