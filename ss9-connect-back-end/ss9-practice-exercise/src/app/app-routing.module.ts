import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductUpdateComponent} from './product/product-update/product-update.component';
import {CategoryEditComponent} from './category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from './category/category-delete/category-delete.component';


const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product/product.module').then(module => module.ProductModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(module => module.CategoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
