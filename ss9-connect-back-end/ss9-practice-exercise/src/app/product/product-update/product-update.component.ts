import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Product} from '../../model/product';
import {Category} from '../../model/category';
import {CategoryService} from '../../category/category.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  product = {} as Product;
  id: number;
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
        category: new FormControl(product.category)
      });
    });
  }
  comparByID(itemOne, itemTwo) {
    return itemOne && itemTwo && itemOne.id == itemTwo.id;
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    });
  }


}
