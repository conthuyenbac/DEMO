import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product_all = [];
  total: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getListProduct();
  }

  getListProduct() {
    var result: any;
    this.productService.getList().subscribe(
      (res) => {
        result = res;
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.product_all = result.object.items;
        this.total = result.object.total;
      }
    );
  }

  remove(id: number) {
    if (window.confirm('Bạn thực sự muốn xóa')) {
      this.productService.delete(id).subscribe(
        (res) => { },
        (err) => {
          console.log(err);
          alert('Xóa không thành công');
        },
        () => {
          alert('Xóa thành công');
          this.getListProduct();
        }
      );
    } else {
      // alert('Hành động bị hủy bởi người dùng');
    }
  }
}
