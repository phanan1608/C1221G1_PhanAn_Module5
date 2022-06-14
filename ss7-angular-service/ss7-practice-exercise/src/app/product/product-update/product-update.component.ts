import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  product = {} as Product;

  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute, private router: Router) {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const customerIdFromRoute = routeParams.get('id');
    this.product = this.productService.findById(customerIdFromRoute);

    this.productForm = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    });
  }

  ngOnInit(): void {

  }


  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product);
    this.router.navigateByUrl("/product/list")
  }
}
