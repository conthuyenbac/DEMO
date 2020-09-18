import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

export class ProductModel {
  category: number;
  productName: string = '';
  amount: number;
  price: number;
  supplier: string = '' //truong nay thay cho hinh anh


  formGroup: FormGroup = null;

  constructor() {
    var fb = new FormBuilder();
    this.formGroup = fb.group({
      category: new FormControl('', Validators.required),
      productName: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      supplier: new FormControl(),
    });
  }
}
