import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/productModel';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  listCategory = [];
  model: ProductModel = new ProductModel();

  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    var result: any;
    this.categoryService.getList().subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.listCategory = result.object.items;
        console.log(this.listCategory);
      }
    );
  }

  submitData() {
    if (this.model.formGroup.valid) {
      var result: any;

      this.productService.add({
        categoryId: this.model.category,
        productName: this.model.productName,
        price: this.model.price,
        amount: this.model.amount,
        supplier: this.model.supplier
      }).subscribe((res) => {
        result = res;
      }, err => {
      
        alert('Thêm mới sản phẩm không thành công. Vui lòng thử lại');
      }, () => {

        alert('Thêm mới sản phẩm thành công');
        this.router.navigateByUrl('/product');
        this.model.productName = "";
      })
    }
  }
}


