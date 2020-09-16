import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/UserModel';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  model: UserModel = new UserModel();
  constructor(
    private UserService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitData() {
    if (this.model.formGroup.valid) {
      this.UserService
        .add({
          username: this.model.username,
          password: this.model.password,
          confirmPassword: this.model.confirmPassword,
          email: this.model.email,
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          organization: "VNPT"
        })
        .subscribe(
          (res) => {},
          (err) => {
            var loi="";
            for(var i=0;i<err.error.object.length;i++){
              loi= loi + "Lỗi "+ (i +1).toString() + " " +err.error.object[i].fieldName + " " + err.error.object[i].message +" \n";
            }            
            alert('Thêm mới không thành công ' + loi);
          },
          () => {
            this.router.navigateByUrl('/login');
          }
        );
    }
  }
}
