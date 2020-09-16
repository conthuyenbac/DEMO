import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: API) {}

  add(data: any) {
    return this.api.post('/api/Account/register', data);
  }
}
