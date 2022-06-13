import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {BlogComponent} from "./blog/blog.component";
import {BlogSingleComponent} from "./blog-single/blog-single.component";
import {ContractListComponent} from "./contract/contract-list/contract-list.component";
import {ContractCreateComponent} from "./contract/contract-create/contract-create.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {FacilityListComponent} from "./facility/facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility/facility-create/facility-create.component";
import {AboutComponent} from "./about/about.component";
import {FacilityDetailsComponent} from "./facility/facility-details/facility-details.component";
import {CustomerEditComponent} from "./customer/customer-edit/customer-edit.component";
import {FacilityEditComponent} from "./facility/facility-edit/facility-edit.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: IndexComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog-sigle', component: BlogSingleComponent},
  {path: 'contract-list', component: ContractListComponent},
  {path: 'contract-create', component: ContractCreateComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'customer-edit/:customerId', component: CustomerEditComponent},
  {path: 'facility-edit/:facilityId', component: FacilityEditComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'facility-detail', component: FacilityDetailsComponent},
  {path: 'about', component: AboutComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
