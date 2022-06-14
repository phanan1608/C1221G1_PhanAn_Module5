import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityDetailsComponent} from "./facility-details/facility-details.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: 'list', component: FacilityListComponent},
  {path: 'create', component: FacilityCreateComponent},
  {path: 'edit/:facilityId', component: FacilityEditComponent},
  {path: 'detail/:facilityId', component: FacilityDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
