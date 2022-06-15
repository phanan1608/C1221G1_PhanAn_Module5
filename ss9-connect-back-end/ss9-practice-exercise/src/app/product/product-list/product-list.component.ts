import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../category/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.productService.deleteProduct(id);
      this.ngOnInit();
    }, e => {
      console.log(e);
    });
  }
}
