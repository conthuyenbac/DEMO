import {
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
  } from '@angular/forms';
  
  export class UserModel {
   
    username: string = '';
    password: string = '';
    confirmPassword: string='';
    email: string = '';
    firstName: string= '';
    lastName: string= '';
    organization: string= '';
  
    formGroup: FormGroup = null;
  
    constructor() {
      var fb = new FormBuilder();
      this.formGroup = fb.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      });
    }
  }
  