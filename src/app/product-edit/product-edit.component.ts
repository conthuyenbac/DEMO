import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/productModel';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  listCategory = [];
  productId: number = 0;

  model: ProductModel = new ProductModel();

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private productService : ProductService,
    private categoryService: CategoryService

  ) { }

  ngOnInit(): void {
    this.getDetailProduct();
    this.getCategories();
  }

  getDetailProduct() {
    this.activeRoute.params.subscribe((params) => {
      this.productId = params.id;
    });

    var result: any;
    this.productService.getById(this.productId).subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        alert('Không tồn tại danh mục này');
      },
      () => {
        this.model.category = result.object.categoryId;
        this.model.productName = result.object.productName;
        this.model.amount = result.object.amount;
        this.model.price = result.object.price;
        this.model.supplier = result.object.supplier;
      }
    );
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
      }
    );
  }
  submitData() {
    if (this.model.formGroup.valid) {
      this.productService
        .edit({
          id: this.productId,
          productName: this.model.productName,
          categoryId: this.model.category,
          price: this.model.price,
          amount: this.model.amount,
          supplier: this.model.supplier,
        })
        .subscribe(
          (res) => {},
          (err) => {
            alert('Cập nhật không thành công');
          },
          () => {
            alert('Cập nhật thành công');
            this.router.navigateByUrl('/product')
          }
        );
    }
  }

}
