import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../category/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[] = []


  constructor(private productService:ProductService, private router: Router, private categoryService:CategoryService) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormControl(),
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


  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(()=>{
      this.productForm.reset();
      alert('Tạo thành công');
      }, e=>{
      console.log(e);
      }
    )
  }

}
