import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {BlogComponent} from "./blog/blog.component";
import {BlogSingleComponent} from "./blog-single/blog-single.component";
import {AboutComponent} from "./about/about.component";
import {ErrorComponent} from "./error/error.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: IndexComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-single', component: BlogSingleComponent},
  {path: 'about', component: AboutComponent},
  {path: 'error', component: ErrorComponent},
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'facility',
    loadChildren: () => import('./facility/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'contract',
    loadChildren: () => import('./contract/contract.module').then(module => module.ContractModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
